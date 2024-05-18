//test/siswa.test.js
const request = require('supertest');
const { app } = require('../src/application.js');
const { insertManyTestSiswa, deleteAllTestSiswa, insertTestSiswa } = require('./util-test.js');

//1. TEST CREATE
describe('TEST CREATE', () => {
  //Delete data
  afterEach(async () => {
    await deleteAllTestSiswa()
  })

  // 3. POST http://localhost:3000/api/siswa
  it('CREATE : Endpoint : POST /api/siswa', async () => {
    //data obyek yang akan di kirim
    const dataKirim = {
      "first_name": "Edy",
      "last_name": "Kholid",
      "email": "edy@gmail.com",
      "phone": "84394549570"
    }
  })
})

//2. TEST READ by id
describe.skip('TEST READ by id', () => {
  //a. Insert data
  beforeEach(async () => {
    await insertTestSiswa();
  })
  //d. Delete data
  afterEach(async () => {
    await deleteAllTestSiswa();
  })
  //2. GET http://localhost:3000/api/siswa/1
  it('READ : Endpoint : GET /api/siswa/:id', async () => {
    //a. send request get
    const getDataResponse = await request(app).get('/api/siswa/1');
    //b. jika sukses, reponse status adalah 200
    expect(getDataResponse.status).toBe(200);
    //c. jika sukses, reponse berupa text adalah
    expect(getDataResponse.text).toBe('GET SISWA');
  })
  //test validasi harusnya invalid (tidak valid)
  it('should reject if request is invalid', async () => {
    const result = await request(app)
      //kirim get menggunakan angka
      .get('/api/siswa/a')
    //status akan menjadi 400
    expect(result.status).toBe(400);
    //errors akan terdefinisi dan di kirimkan alasan errornya
    //expect(result.body.errors).toBeDefined();
  });
})

//3. TEST CREATE
describe.skip('TEST CREATE', () => {
  //Delete data
  afterEach(async () => {
    await deleteAllTestSiswa();
  })
  //3. POST http://localhost:3000/api/siswa
  it('CREATE : Endpoint : POST /api/siswa', async () => {
    //data obyek yang akan dikirim
    const dataKirim = {
      "first_name": "Edy",
      "last_name": "Kholid",
      "email": "edy@gmail.com",
      "phone": "84394549570"
    }
    const getDataResponse = await request(app)
      //a. send request post
      .post('/api/siswa')
      //kirim data body >> object dataKirim
      .send(dataKirim);
    //b. jika sukses, reponse status adalah 200
    expect(getDataResponse.status).toBe(200);
    //c. jika sukses, reponse berupa text adalah
    expect(getDataResponse.text).toBe('ADD NEW SISWA');
  })
  it('should reject if request is invalid', async () => {
    const result = await request(app)
      .post('/api/siswa')
      .send({
        "first_name": "",
        "last_name": "Kholid",
        "email": "edy@gmail.com",
        "phone": "84394549570"
      });
    expect(result.status).toBe(400);
    //expect(result.body.errors).toBeDefined();
  });

})

//4. TEST DELETE by id
describe('TEST DELETE by id', () => {
  //a. Insert data
  beforeEach(async () => {
    await insertTestSiswa();
  })
  //4. DELETE http://localhost:3000/api/siswa/1
  it('DELETE : Endpoint : DELETE /api/siswa/:id', async () => {
    //a. send request delete
    const getDataResponse = await request(app).delete('/api/siswa/1');
    //b. jika sukses, reponse status adalah 200
    expect(getDataResponse.status).toBe(200);
    //c. jika sukses, reponse berupa text adalah
    expect(getDataResponse.text).toBe('DELETE SISWA');
  })
  it('should reject if request is invalid', async () => {
    const result = await request(app)
      .delete('/api/siswa/a')
    expect(result.status).toBe(400);
    //expect(result.body.errors).toBeDefined();
  });
})

//5. TEST UPDTAE by id
describe('TEST UPDTAE by id', () => {
  //a. Insert data
  beforeEach(async () => {
    await insertTestSiswa();
  })
  //d. Delete data
  afterEach(async () => {
    await deleteAllTestSiswa();
  })
  //5. PUT http://localhost:3000/api/siswa/1
  it('UPDATE : Endpoint : PUT /api/siswa/:id', async () => {
    //data obyek yang akan dikirim
    const dataKirim = {
      "first_name": "Silmi",
      "last_name": "Ayra-Naifa",
      "email": "silmi@gmail.com",
      "phone": "48567356790"
    }
    const getDataResponse = await request(app)
      //a.send request put
      .put('/api/siswa/1')
      //kirim data body >> object dataKirim
      .send(dataKirim);
    //b. jika sukses, reponse status adalah 200
    expect(getDataResponse.status).toBe(200);
    //c. jika sukses, reponse berupa text adalah
    expect(getDataResponse.text).toBe('UPDATE SISWA');
  })
  it('should reject if request is invalid', async () => {
    const result = await request(app)
      .post('/api/siswa')
      .send({
        "first_name": "",
        "last_name": "Ayra-Naifa",
        "email": "silmi@gmail.com",
        "phone": "48567356790"
      });
    expect(result.status).toBe(400);
    //expect(result.body.errors).toBeDefined();
  });
})