//test/siswa.test.js
const request = require('supertest');
const { app } = require('../src/application.js');
const { log } = require('winston');
const { query } = require('../src/util/db.js');

describe('TEST REST FULL API', () => {
  const dataTest = [
    {
      "id": 1,
      "first_name": "Silmi",
      "last_name": "Ayra",
      "email": "silmi@gmail.com",
      "phone": "78913478"
    },
    {
      "id": 2,
      "first_name": "Nafi",
      "last_name": "Dhafin",
      "email": "afin@gmail.com",
      "phone": "678126717"
    }
  ]

  //1. GET http://localhost:3000/api/siswa
  it.skip('READ : Endpoint : GET /api/siswa', async () => {
    //a.send request get
    const getDataResponse = await request(app).get('/api/siswa');
    //b. jika sukses, reponse status adalah 200
    expect(getDataResponse.status).toBe(200);
    console.log("getDataResponse.body :", getDataResponse.body);
    //c. jika sukses, reponse berupa text adalah 'GET ALL SISWA'
    //expect(getDataResponse.text).toBe('GET ALL SISWA');
    // Memeriksa panjang array
    expect(getDataResponse.body.data.length).toBeGreaterThan(0)
    // Memeriksa isi array
    expect(getDataResponse.body.data).toEqual(expect.arrayContaining(dataTest))
  })

  //2. GET http://localhost:3000/api/siswa/1
  it.skip('READ : Endpoint : GET /api/siswa/:id', async () => {
    //a.send request get
    const getDataResponse = await request(app).get('/api/siswa/1');
    //b. jika sukses, reponse status adalah 200
    expect(getDataResponse.status).toBe(200);
    //c. jika sukses, reponse berupa text adalah
    //expect(getDataResponse.body.data).toEqual(dataTest)
  })

  //3. POST http://localhost:3000/api/siswa
  it.skip('CREATE : Endpoint : POST /api/siswa', async () => {
    //data obyek yang akan dikirim
    const dataKirim = {
      "first_name": "Edy",
      "last_name": "Kholid",
      "email": "edy@gmail.com",
      "phone": "4579568902"
    }
    const getDataResponse = await request(app)
      //a.send request post
      .post('/api/siswa')
      //kirim data ke dalam request body
      .send(dataKirim);
    //Jika sukses, respon status adalah 201
    expect(getDataResponse.status).toBe(201);
    // Memeriksa bahwa response adalah sebuah object
    expect(getDataResponse.body.data).toBeInstanceOf(Object)
    // Memeriksa apakah object mengandung nilai tertentu
    expect(getDataResponse.body.data).toEqual(expect.objectContaining({ "first_name": "Edy", }))
  })

  //4. DELETE http://localhost:3000/api/siswa/1
  it.skip('DELETE : Endpoint : DELETE /api/siswa/:id', async () => {
    // test >> 1.insert data >> 2.ambil id insert >> 3.hapus data dg id insert

    //1. insert data >> dapatkan ID
    //data insert
    const dataInsert = ["test", "test", "test@gmail.com", "458729375"]
    //kirimkan query SQL insert >> INSERT INTO tabel (kolom) VALUES (?) [data]
    const results = await query('INSERT INTO tbsiswa (first_name,last_name,email,phone) VALUES (?, ?, ?,?)', dataInsert);
    //2. simpan data id insert
    const idData = results.insertId
    //3. gunakan ID untuk request delete by ID
    //kirim request delete
    const getDataResponse = await request(app)
      .delete(`/api/siswa/${idData}`);
    //pastikan hasil reponse status adalah 200
    expect(getDataResponse.status).toBe(200);
    //pastikan response test adalah Deleted Successfully
    expect(getDataResponse.text).toBe('Deleted Successfully');
  })
})

describe('UPDATE : Endpoint : PUT /api/siswa/:id', function () {
  //Cara TEST >> 1. Insert data baru >> 2. Update data >> 3. Delete data
  //1. Insert data baru sebelum test >> simpan ID >> beforeEach (sebelum test)
  let idData
  beforeEach(async () => {
    const dataInsert = ["Silmi", "Ayra", "silmi@gmail.com", "78924952049"]
    const results = await query('INSERT INTO tbsiswa (first_name,last_name,email,phone) VALUES (?, ?, ?,?)', dataInsert);
    idData = results.insertId
  })
  //3. hapus data setelah test >> detele by ID >> afterEach (setelah test)
  afterEach(async () => {
    await query('DELETE FROM tbsiswa WHERE id = ?', [idData]);
  })
  //2. PUT http://localhost:3000/api/siswa/1
  it('UPDATE : Endpoint : PUT /api/siswa/:id', async () => {
    //data yang akan dikirim update
    const dataKirim = {
      "first_name": "Silmi",
      "last_name": "Ayra-Naifa",
      "email": "silmi@gmail.com",
      "phone": "78924952049"
    }
    const getDataResponse = await request(app)
      //kirim request put
      .put(`/api/siswa/${idData}`)
      //kirim data yang akan di update ke dalam request body
      .send(dataKirim)
    //periksa response status adalah 201
    expect(getDataResponse.status).toBe(201)
    //periksa isi response body data id adalah idData
    expect(getDataResponse.body.data.id).toBe(idData)
    //periksa isi response body data first_name adalah Silmi
    expect(getDataResponse.body.data.first_name).toBe("Silmi")
    //periksa isi response body data last_name adalah Ayra-Naifa
    expect(getDataResponse.body.data.last_name).toBe("Ayra-Naifa")
    //periksa isi response body data email adalah silmi@gmail.com
    expect(getDataResponse.body.data.email).toBe("silmi@gmail.com")
    //periksa isi response body data phone adalah 78924952049
    expect(getDataResponse.body.data.phone).toBe("78924952049")
  })
})