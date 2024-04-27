//src/application.js

// a. Import library Framework express
import express from "express";
import { SiswaRouter } from "./siswa.js";

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

// 3. Contoh Endpoint API >> POST /api/pasien >> Req Body >> Res Body
// Membuat Rute >> app.post(Route, callback) >> (req,res) => {res.json({ ... })}
router.post('/pasien', (req, res, next) => {
  // kirim json >> data berasal dari request body
  res.json({
    message: 'POST Data Pasien Sukses',
    data: req.body
  })
})

// Jalankan siswa router sebagai middleware router 
router.use('/siswa', SiswaRouter)

app.use("/api", router)
