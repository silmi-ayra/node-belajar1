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

## 4. Membuat EndPoint CRUD Dokumentasi
