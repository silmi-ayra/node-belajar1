## Belajar Node JS Express

## 1. Persiapan

1. mkdir node-belajar1

2. Membuat repo di github

```
echo "# node-belajar1" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
//git remote add origin git@github.com:silmi-ayra/node-belajar1.git
git remote add origin github.com-silmi:silmi-ayra/node-belajar1.git
git push -u origin main
```

3. Init dan instal depedency

```
npm init
npm install express
npm install jest --save-dev
npm install babel-jest --save-dev
npm install @babel/preset-env --save-dev
npm install @babel/plugin-transform-runtime --save-dev
npm install jest supertest @types/jest --save-dev
npm install --save-dev nodemon
npm install winston winston-daily-rotate-file
```

4. Edit file package.json

```
"main": "./src/index.js",
"type": "module",
"scripts": {
    "test": "jest",
    "start": "node ./src/index.js",
    "dev": "nodemon ./src/index.js"
  },
"jest": {
"maxConcurrency" : 2,
"verbose": true,
"transform": {
"^.+\\.[t|j]sx?$": "babel-jest"
},
"collectCoverage": true,
"coverageThreshold": {
"global": {
"branches": 100,
"functions": 100,
"lines": 100,
"statements": 100
}
},
"collectCoverageFrom": [
"src/**/*.{js,jsx}",
"!vendor/**/*.{js,jsx}"
]
},
```

5. Tambahkan file babel.config.json

```
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}
```

6. Tambahkan file .gitignore

```
node_modules
build
npm-debug.log
.nyc
.env
.DS_Store
.idea
coverage
\*.log
```

## 2. Mengenal express JS

ExpressJS adalah salah satu Web Framework OpenSource paling populer di NodeJS

### Object App dari Express

`export const app = express();`

Object app pada Express adalah inti dari aplikasi Express. Dengan objct ini, Anda dapat membuat rute, menangani permintaan HTTP, mengatur middleware, dan berbagai fungsi lainnya yang terkait dengan pengaturan dan penanganan aplikasi web

Berikut adalah beberapa contoh penggunaan umum object app pada Express:

1. Membuat Rute : Anda dapat menggunakan metode `app.get()`, `app.post()`, `app.put()`, `app.delete()`, dll, untuk menentukan rute HTTP dan menangani permintaan yang sesuai.

```
app.get('/', function(req, res) {
  res.send('Hello World!');
});
```

2. Mengatur Middleware : Middleware adalah fungsi-fungsi yang dipanggil sebelum penanganan permintaan akhir. Dengan Express, Anda dapat menggunakan metode `app.use()` untuk mengatur middleware.

```
app.use(express.json()); // Middleware untuk menangani JSON data
```

3. Menjalankan Server: Seperti yang Anda lihat dalam potongan kode sebelumnya, Anda menggunakan objek app untuk memanggil metode `listen()` untuk memulai server dan mendengarkan koneksi masuk.

```
app.listen(PORT, function () {
  console.log(`Server berjalan di port ${PORT}`);
});
```

### Application :: a.import library >> b.app object >> c.port >> d.listen

```
//src/index.js
// a. Import library Framework express
import express from "express";

// b. Membuat object app dari express function
export const app = express();

// c. Definisikan PORT sebagai variable,
// sehingga mudah menggantinya jika diperlukan
const PORT = process.env.PORT || 3000;

// d. Metode app.listen untuk memulai sebuah server dan mendengarkan koneksi masuk pada port
//app.listen(PORT, callback)
//() => {...}: arrow function, used as the callback function. logs a message to the console
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```

### Jalankan Server : `npm run dev`

## 3. Basic Testing

Belajar membuat endpoint request dan response

1. Endpoint GET http://localhost:3000/ > Request => Response send String

Response Body Success :

```json
"Hello World!"
```

2. Endpoint GET http://localhost:3000/oby > Request => Response send String

Response Body Success :

```json
{
  "message": "GET Data Pasien Sukses",
  "data": {
    "nama": "Afin",
    "alamat": "Semarang"
  }
}
```

3. Endpoint POST http://localhost:3000/pasien > Request + Body => Response json Object

Response Body :

```json
Content-Type: application/json

{
  "nama": "Silmi",
  "alamat": "Semarang"
}
```

Response Body Success :

```json
{
  "message": "POST Data Pasien Sukses",
  "data": {
    "nama": "Silmi",
    "alamat": "Semarang"
  }
}
```

Untuk pertama kita buat :

#### 1. Endpoint GET http://localhost:3000/ > Request => Response send String

- Memisahkan index.js dan appllication.js, untuk memudahkan pengetesan dengan unit test

```
//src/index.js
import { app } from "./application.js";

// c. Definisikan PORT sebagai variable,
// sehingga mudah menggantinya jika diperlukan
const PORT = process.env.PORT || 3000;

// d. Metode app.listen untuk memulai sebuah server dan mendengarkan koneksi masuk pada port
//app.listen(PORT, callback)
//() => {...}: arrow function, used as the callback function. logs a message to the console
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```

- endpoint GET http://localhost:3000/

Response Body Sukses

```
//src/application.js

// a. Import library Framework express
import express from "express";

// b. Membuat object app dari express function
export const app = express();

// e. Menjalankan Middleware app.use menangani data json
app.use(express.json())

// f. Membuat Rute >> app.get(Route, callback) >> (req, res) => {...}
// 1. Contoh : Endpoint API : GET '/'
app.get('/', (req, res) => {
  console.log('Hello World requested');
  res.send('Hello World!')
})
```

- melakukan pengetesan dengan request.rest

```
//request.rest

### 1. Contoh : Endpoint API : GET '/'
GET http://localhost:3000/
```

- melakukan pengetesan dengan request.rest

Unit Test adalah callback function

```
1. fungsi testing : describe >> it
describe('Nama Test', callback1)
callback1 >> () => {it('Nama Sub Test', callback2)}
callback2 >> async()=>{...}

describe("Test1", () => {
  it("Test 1.a", async() => {
    expect(...).toBe(...);
  });
  it("Test 1.b", async() => {
    expect(...).toBe(...);
  });
});

2. fungsi testing : describe >> test
describe('Nama Test', callback1)
callback1 >> () => {test('Nama Sub Test', callback2)}
callback2 >> async()=>{...}

describe("Test1", () => {
  test("Test 1.a", async() => {
    expect(...).toBe(...);
  });
  test("Test 1.b", async() => {
    expect(...).toBe(...);
  });
});
```

Unit Test :

```
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
});

// Jalankan test
// npx jest app.test.js
```

4. Basic Routing

### 2. Endpiont GET http://localhost:3000/oby > Request => Response json Object

- end point GET http://localhost:3000/oby

Response Body Success :

```
{
  "message": "GET Data Pasien Sukses",
  "data": {
    "nama": "Afin",
    "alamat": "Semarang"
  }
}
```

```
//src/application.js

// a. Import library Framework express
import express from "express";

// b. Membuat object app dari express function
export const app = express();

// e. Menjalankan Middleware app.use menangani data json
app.use(express.json())

// f. Membuat Rute >> app.get(Route, callback) >> (req, res) => {...}
// 1. Contoh : Endpoint API : GET '/'
app.get('/', (req, res) => {
  console.log('Hello World requested');
  res.send('Hello World!')
})

// 2. Contoh Endpoint API >> GET /oby >> Response Object dg router
// membuat object router dari express
export const router = express.Router();
// jalankan middleware router
app.use(router)
// data object yang akan di kirim ke respon json
const dtPasien = {
  nama: "Afin",
  alamat: "Semarang"
}
//routing untuk http://localhost:3000/oby
router.get('/oby', (req, res, next) => {
  // response json data
  res.json({
    message: 'GET Data Pasien Sukses',
    data: dtPasien
  })
})
```

- test rest

```
### 2. Contoh Endpoint API >> GET /oby
GET http://localhost:3000/oby
```

- unit test

```
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
```

## 3. Req Body >> Response Body

- endpoint POST http://localhost:3000/api/pasien

Request Body :

```json
Content-Type: application/json

{
  "nama" : "Silmi",
  "alamat": "Karangawen"
}
```

Response Body Success :

```json
{
  "message": "POST Data Pasien Sukses",
  "data": {
    "nama": "Silmi",
    "alamat": "Karangawen"
  }
}
```

```
// 3. Contoh Endpoint API >> POST /api/pasien >> Req Body >> Res Body
// Membuat Rute >> app.post(Route, callback) >> (req,res) => {res.json({ ... })}
router.post('/pasien', (req, res, next) => {
  // kirim json >> data berasal dari request body
  res.json({
    message: 'POST Data Pasien Sukses',
    data: req.body
  })
})
app.use("/api", router)
```

- request test

```
### 3. POST http://localhost:3000/api/pasien
POST http://localhost:3000/api/pasien
Content-Type: application/json

{
  "nama" : "Tutik",
  "alamat": "Semarang"
}
```

- unit test

```
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
```

pindah ke branch api-object

## 4. Membuat EndPoint CRUD Dokumentasi >> Object

Dokumentasi pada file `.\docs\siswa.md` >> CRUD

```
1. READ : Endpoint : GET /api/siswa
2. READ : Endpoint : GET /api/siswa/:id
3. CREATE : Endpoint : POST /api/siswa
4. DELETE : Endpoint : DELETE /api/siswa/:id
5. UPDATE : Endpoint : PUT /api/siswa/:id
```

## 5. GET Data SEARCH ALL (READ)

- API SPEC `//docs/siswa.md`

Endpoint: GET /api/siswa

Response Body Success :

```
{
  "data": [
    {
      "id": 1,
      "first_name": "Edy",
      "last_name": "Coleee",
      "email": "edycoleee@gmail.com",
      "phone": "78932817514"
    },
    {
      "id": 2,
      "first_name": "Tutik",
      "last_name": "Sulasmi",
      "email": "ttkslsm@gmail.com",
      "phone": "2131251345574"
    }
  ]
}
```

- Endpoint

install uuid >> npm install uuid

```
//src/siswa.js
import express from "express";
import { v4 as uuid } from 'uuid';

//membuat siswa router dari express router > export
export const SiswaRouter = express.Router();

// 0. MOCKUP DATA OBYEK (DATA SEMENTARA)
let dbDataSiswa = [
  {
    "id": 1,
    "first_name": "Edy",
    "last_name": "Coleee",
    "email": "edycoleee@gmail.com",
    "phone": "78932817514"
  },
  {
    "id": 2,
    "first_name": "Tutik",
    "last_name": "Sulasmi",
    "email": "ttkslsm@gmail.com",
    "phone": "2131251345574"
  }
]

// 1. READ : Endpoint : GET /api/siswa
SiswaRouter.get('/', (req, res, next) => {
  //kembalikan respon berupa json data siswa
  res.json({ data: dbDataSiswa })
})
```

- Jalankan siswa Router ke middleware application.js

```
//src/application.js
import express from "express";
import { SiswaRouter } from "./siswa.js";

===================================================
===================================================

// Jalankan siswa router sebagai middleware router
router.use("/siswa", SiswaRouter)

app.use("/api", router)
```

- Request.rest Test

```
### 4. GET Data SEARCH ALL (READ)
GET http://localhost:3000/api/siswa
```

- Unit Test

```
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
})
```

## 6. GET Data / id (READ)

- API SPEC `//docs/siswa.md`

READ : Endpoint : GET /api/siswa/:id

Response Body Success :

```
{
  "data": {
    "id": 1,
    "first_name": "Edy",
    "last_name": "Coleee",
    "email": "edycoleee@gmail.com",
    "phone": "78932817514"
  }
}
```

- Endpoint

```
// 2. READ : Endpoint : GET /api/siswa/:id >> menggunakan request.params.id
SiswaRouter.get('/:id', (req, res, next) => {
  //Panggil Fungsi Get Siswa by ID dengan mengirim id = req.params.id
  const dtSiswa = getdbSiswaId(req.params.id)
  //Jika data Kosong kirim pesan error
  if (!dtSiswa || dtSiswa.length === 0) {
    // kirimkan respod status 404 dan json
    return res.status(404).json({ "errors": "Siswa is not found" })
  }
  //Jika data tdk kosong kirim respon datanya
  res.json({ data: dtSiswa })
})

//Fungsi Get Siswa by ID ke object mockup database >> dbDataSiswa
const getdbSiswaId = (id) => {
  //return dbDataSiswa.find((siswa) => siswa.id === parseInt(id))
  // cari siswa di dbDataSiswa deengan siswa.id = id >> return hasilnya
  return dbDataSiswa.find((siswa) => siswa.id === id)
}
```

- Request.rest Test

```
### 5. GET Data /id (READ)
GET http://localhost:3000/api/siswa/1
```

- Unit Test

## 7. CREATE : Endpoint : POST /api/siswa

- API SPEC `//docs/siswa.md`

CREATE : Endpoint : POST /api/siswa

Response Body Success :

```
{
  "data": {
    "first_name": "Edy",
    "last_name": "Coleee",
    "email": "edycoleee@gmail.com",
    "phone": "78932817514",
    "id": "3526t633452134-4262-5xvfgy357y4"
  }
}
```

- Endpoint

```
//3. CREATE : Endpoint : POST /api/siswa >> ambil req body >> simpan ke data siswa
SiswaRouter.post('/', (req, res, next) => {
  //ambil data dari request.body
  const dataReq = req.body;
  //buat id uniq dengan bantuan uuid
  const id = uuid()
  //Fungsi utk masukkan data kedalam data siswa >>  push array object
  const AddDtSiswa = (data) => {
    dbDataSiswa.push({ ...data, id })
    // log data hasilnya
    console.log(dbDataSiswa);
  }

  //Jalankan Fungsi dan masukkan variable dari body
  AddDtSiswa(dataReq)
  //Get data siswa berdasarkan id yang sudah di buat tadi > jika sukses maka akan dapat datanya
  const dataRespon = getdbSiswaId(id)
  //kirim sebagai respon json data yang akan di dapat
  res.json({ data: dataRespon })
})
```

- Request.rest Test

```
### 6. POST Data (CREATE)
POST http://localhost:3000/api/siswa
Content-Type: application/json

{
  "first_name": "Silmi",
  "last_name": "Ayra",
  "email": "slmaania@gmail.com",
  "phone": "9526459502334"
}
```

- Unit Test

```
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
```

## 8. DELETE Data /id (DELETE)

- API SPEC `//docs/siswa.md`

DELETE : Endpoint : DELETE /api/siswa/:id

Response Body Success :

```json
{
  "data": [
    {
      "id": "2",
      "first_name": "Nafi",
      "last_name": "Dhafin",
      "email": "nidhan@gmail.com",
      "phone": "785285043806"
    }
  ]
}
```

- Endpoint

```
// 4. DELETE : Endpoint : DELETE /api/siswa/:id >> filter data yang bukan id(req.params.id) yang dikirim
SiswaRouter.delete('/:id', (req, res, next) => {
  //cari apakah id data siswa tersebut ada di data siswa >> req.params.id
  const dtSiswa = getdbSiswaId(req.params.id)
  //tampilkan di log
  console.log(dtSiswa);
  //jika data siswa tidak ketemu atau array isinya 0
  if (!dtSiswa || dtSiswa.length === 0) {
    //kirim status 404 dan pesan error
    return res.status(404).json({ "errors": "Siswa is not found" });
  } else {
    //jika datanya di temukan
    console.log("delete");
    // Fungsi delete dataSiswa >> filter data yang dataSiswa.id tidak sama dengan id
    const deldbSiswaId = (id) => {
      dbDataSiswa = dbDataSiswa.filter((dtSiswa) => dtSiswa.id !== id)
    }
    //panggil fungsi delete dengan mengirimkan id > req.params.id
    deldbSiswaId(req.params.id)
    //kirim response 200 dan json data siswa sisanya setelah di filter
    return res.status(200).json({ "data": dbDataSiswa })
  }
})
```

- Request.rest Test

```
### 7. DELETE Data /id (DELETE)
DELETE http://localhost:3000/api/siswa/1
```

- Unit Test

```

```
