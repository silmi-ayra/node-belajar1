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