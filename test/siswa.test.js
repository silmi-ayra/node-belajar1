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
  it.skip('GET Data SEARCH ALL (READ)', async () => {
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
  it.skip('GET Data by ID (READ)', async () => {
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
  it.skip('POST Data (CREATE)', async () => {
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
  it.skip('DELETE Data by id (DELETE)', async () => {
    // kirimkan request DELETE http://localhost:3000/api/siswa/1 dan tangkap hasilnya > getDataResp
    const getDataResponse = await request(app).delete('/api/siswa/1')
    //tampilkan di log
    console.log(getDataResponse);
    //jika datanya didele maka response status 200
    expect(getDataResponse.status).toBe(200)
    // Memeriksa isi array tidak mengandung object tertentu
    expect(getDataResponse.body.data).not.toEqual(expect.arrayContaining([dataTest]))
  })

  // 5. PUT http://localhost:3000/api/siswa/1
  it('POST Data (CREATE)', async () => {
    // kirimkan data yang akan di edit dalam body
    const dataKirim = {
      "first_name": "Nafi",
      "last_name": "Dhafin",
      "email": "nidhan@gmail.com",
      "phone": "785285043806"
    }
    const response = await request(app)
      //kirim request PUT http://localhost:3000/api/siswa/1 > id = 1
      .put('/api/siswa/1')
      //kirimkan data body
      .send(dataKirim)
    console.log("response.body :", response.body);
    //hasil status jika sukses = 200
    expect(response.status).toBe(200)
    // Memeriksa apakah objek mengandung nilai tertentu
    expect(response.body.data).toEqual(expect.objectContaining({ "first_name": "Nafi" }));
    expect(response.body.data).toEqual(expect.objectContaining({ "last_name": "Dhafin" }));
  })
})