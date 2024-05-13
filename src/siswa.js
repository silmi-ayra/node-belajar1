//src/siswa.js
import express from "express";
import { query } from "./util/db.js";

//membuat onject router siswa dari express
export const SiswaRouter = express.Router();

// 1. READ : Endpoint : GET /api/siswa
SiswaRouter.get('/', async (req, res, next) => {
  try {
    //Perintah Query SQL ke database >> SELECT * FROM tabel
    const rows = await query('SELECT * FROM tbsiswa')
    //tampilkan di log
    console.log(`GET DATA:${JSON.stringify(rows)}`);
    //kirim status 200 dan data >> array object rows
    res.status(200).json({ 'data': rows })
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send('Internal Server Error');
  }
})

// 2. READ : Endpoint : GET /api/siswa/:id
SiswaRouter.get('/:id', async (req, res, next) => {
  try {
    //ambil id dari request params
    const { id } = req.params
    //Perintah Query SQL ke database >> 'SELECT * FROM tabel WHERE kolom =?' , [data]
    const rows = await query('SELECT * FROM tbsiswa WHERE id = ?', [id])
    //tampilkan di log
    console.log(`GET DATA: ${JSON.stringify(rows)}`);
    //kirim status 200 dan data >> array object rows >> object rows ke 0 
    res.status(200).json({ 'data': rows[0] })
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send('Internal Server Error')
  }
})

// 3. CREATE : Endpoint : POST /api/siswa
SiswaRouter.post('/', async (req, res, next) => {
  try {
    //ambil data yang akan sisimpan dari request body
    const { first_name, last_name, email, phone } = req.body
    //kirim query SQL perintah simpan >> 'INSERT INTO tabel (kolom) VALUES (?)', [datakirim]
    const result = await query('INSERT INTO tbsiswa (first_name, last_name, email, phone) VALUES (?,?,?,?)', [first_name, last_name, email, phone])
    //ambil data hasil query berupa ID insert
    const id = result.insertId
    //console.log(result.insertID);
    //GET data ke server dengan id hasil insert >> 'SELECT * FROM tabel WHERE kolom = ?', [data]
    const rows = await query('SELECT * FROM tbsiswa WHERE id = ?', [id])
    //tampilkan hasilnya di log
    console.log(`POST NEW DATA: ${JSON.stringify(rows)}`);
    //kirim status 201, dan data array object hasil get >> object ke 0 di array
    res.status(201).send({ data: rows[0] })
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send('Internal Server Error')
  }
})

// 4. DELETE : Endpoint : DELETE api/siswa/:id
SiswaRouter.delete('/:id', async (req, res, next) => {
  try {
    //ambil data dari id request params
    const { id } = req.params

    //kirim query SQL delete >> 'DELETE FROM tabel WHERE kolom = ?', [data]
    const result = await query('DELETE FROM tbsiswa WHERE id = ?', [id])
    //buat variable message
    let message = 'Error in delete'
    //jika ada datanya maka pesan sukses delete 
    if (result.affectedRows) {
      message = 'Deleted Successfully'
    }
    //tampilkan data id
    console.log(`DELETE DATA: ${id}`);
    //kirim response status 200 dan message (sukses / gagal delete)
    return res.status(200).send(message)
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send('Internal Server Error')
  }
})

//UPDATE : Endpoint : PUT /api/siswa/:id
SiswaRouter.put('/:id', async (req, res, next) => {
  console.log(req.params, req.body);
  try {
    //mengambil id dari request params
    const { id } = req.params
    //mengambil data dari request body
    const { first_name, last_name, email, phone } = req.body;
    //mengirim perintah quesrySQL Update >> UPDATE tabel SET kolom=?', [data]
    await query('UPDATE tbsiswa SET first_name=?, last_name=? ,email=? ,phone=? WHERE id=?', [first_name, last_name, email, phone, id]);
    //Get data setelah di lakukan update
    //mengirim perintah quesrySQL SELECT >> SELECT * FROM tabel WHERE kolom = ?', [id]
    const rows = await query('SELECT * FROM tbsiswa WHERE id = ?', [id]);
    //tampilkan dalam log hasilnya
    console.log(`POST NEW DATA: ${JSON.stringify(rows)}`);
    //kirim reaponse status 200 dan data array object >> object dalam array ke 0
    res.status(201).send({ 'data': rows[0] });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send('Internal Server Error');
  }
})