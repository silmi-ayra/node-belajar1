//test/siswa.test.js
const request = require('supertest');
const { app } = require('../src/application');

describe('TEST GET Endpoint 1', () => {
  //data yang untuk membandingkan hasil test >> salah satu object dari response
  // kita coba data mockup object dengan id : 1
  const dataTest = {
    "id": "1",
    "first_name": "Edy",
    "last_name": "Coleee",
    "email": "edycoleee@gmail.com",
    "phone": "78932817514"
  }

  //1. GET http://localhost:3000/api/siswa
  it('GET Data SEARCH ALL (READ)', async () => {
    // kirim request ke server GET http://localhost:3000/api/siswa
    const getDataResponse = await request(app).get('/api/siswa');
    //cek log data response
    console.log(getDataResponse.body.data);
    // Memeriksa response status = 200
    expect(getDataResponse.status).toBe(200);
    // Memeriksa panjang array lebih dari 1 object panjangnya
    expect(getDataResponse.body.data.length).toBeGreaterThan(0);
    // Memeriksa isi array apakah ada object seperti dataTest
    expect(getDataResponse.body.data).toEqual(expect.arrayContaining([dataTest]));
  })

  //2. GET http://localhost:3000/api/siswa/1
  it('GET Data by ID (READ)', async () => {
    //kirim request GET http://localhost:3000/api/siswa/1
    const getDataResponse = await request(app).get('/api/siswa/1');
    //tampilkan di log data
    console.log(getDataResponse.body.data);
    // jika sukses maka response status = 200
    expect(getDataResponse.status).toBe(200);
    // Memeriksa isi object apakah isi datanya sama dengan dataTest
    expect(getDataResponse.body.data).toEqual(dataTest);
  })

  // 3. POST http://localhost:3000/api/siswa
  it('POST Data (CREATE)', async () => {
    //data request body yang akan dikirim 
    const dataKirim = {
      "first_name": "Silmi",
      "last_name": "Ayra",
      "email": "slmaania@gmail.com",
      "phone": "9526459502334"
    }
    const response = await request(app)
      //kirim request POST http://localhost:3000/api/siswa
      .post('/api/siswa')
      //kirim data kedalam request body
      .send(dataKirim)
    //response status sama 200
    expect(response.status).toBe(200)
    // Memeriksa bahwa respons adalah sebuah objek
    expect(response.body.data).toBeInstanceOf(Object);
    // Memeriksa apakah objek mengandung nilai tertentu "email": "slmaania@gmail.com"
    expect(response.body.data).toEqual(expect.objectContaining({ "email": "slmaania@gmail.com" }))
  })

  // 4. DELETE http://localhost:3000/api/siswa/1
  it('DELETE Data by id (DELETE)', async () => {
    // kirimkan request DELETE http://localhost:3000/api/siswa/1 dan tangkap hasilnya > getDataResp
  })
})