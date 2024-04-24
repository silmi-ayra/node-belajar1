//test/app.test.js

const request = require('supertest');
const { app } = require('../src/application');

// a. fungsi testing : describe >> it
describe('TEST GET No 1 dan No 3', () => {
  //1. TEST No 1 >> GET http://localhost:3000/
  it('TEST GET http://localhost:3000/', async () => {
    // b. lakukan request, GET "/" dan tangkap hasilnya ke variable response
    const response = await request(app)
      .get('/');
    // c. Jika request berhasil ke server maka status response = 200
    expect(response.status).toBe(200);
    // d. Periksa isi response seharusnya 'Hello World!'
    expect(response.text).toBe('Hello World!');
  });
  // 3. test POST http://localhost:3000/api/pasien
  it('POST http://localhost:3000/api/pasien', async () => {
    // b. buat variable data body yang akan dikirim 
    const dataKirim = {
      "nama": "Tutik",
      "alamat": "Semarang"
    }
    // c. lakukan request, POST "/api/pasien" dan tangkap hasilnya ke variable response
    const response = await request(app)
      //kirim post
      .post('/api/pasien')
      //kirim send body
      .send(dataKirim);
    //d. Jika request berhasil ke server maka status response = 200
    expect(response.status).toBe(200);
    //e. respose body yang diharapkan adalah sama dengan data berikut
    expect(response.body).toEqual({
      message: 'POST Data Pasien Sukses',
      data: dataKirim
    });
  });
});

//Test GET http://localhost:3000/oby
// a. fungsi testing : test
test("TEST GET http://localhost:3000/oby", async () => {
  // b. lakukan request, GET "/oby" dan tangkap hasilnya ke variable response
  const response = await request(app)
    .get("/oby");
  // c. Cek response Object >> body >> toEqual (sama)
  expect(response.body).toEqual({
    message: 'GET Data Pasien Sukses',
    data: {
      nama: "Afin",
      alamat: "Semarang"
    }
  });
})
