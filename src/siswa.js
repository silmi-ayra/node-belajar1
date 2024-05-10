//src/siswa.js
import express from "express";

//membuat onject router siswa dari express
export const SiswaRouter = express.Router();

// 1. READ : Endpoint : GET /api/siswa
SiswaRouter.get('/', (req, res, next) => {
  //SELECT * FROM tabel
  res.send("GET ALL SISWA")
})

// 2. READ : Endpoint : GET /api/siswa/:id
SiswaRouter.post('/', (req, res, next) => {
  //SELECT * FROM tabel WHERE kolom = yangdicari
  res.send("GET SISWA")
})

// 3. CREATE : Endpoint : POST /api/siswa
SiswaRouter.post('/', (req, res, next) => {
  //INSERT INTO tabel (kolom) VALUES (?), [data Kirim]
  res.send("ADD NEW SISWA")
})

// 4. DELETE : Endpoint : DELETE api/siswa/:id
SiswaRouter.delete('/:id', (req, res, next) => {
  //DELETE FROM tabel WHERE kolom = ?', [data]
  res.send("DELETE SISWA");
})

// 5. UPDATE : Endpoint : PUT /api/siswa/:id
SiswaRouter.put('/:id', (req, res, next) => {
  //UPDATE tabel SET kolom=?', [data]
  res.send("UPDATE SISWA")
})