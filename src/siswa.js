//src/siswa.js
import express from "express";
import { v4 as uuid } from 'uuid';

//membuat siswa router dari express router > export
export const SiswaRouter = express.Router();

// 0. MOCKUP DATA OBYEK (DATA SEMENTARA)
let dbDataSiswa = [
  {
    "id": "1",
    "first_name": "Edy",
    "last_name": "Coleee",
    "email": "edycoleee@gmail.com",
    "phone": "78932817514"
  },
  {
    "id": "2",
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

// 5. UPDATE : Endpoint : PUT /api/siswa/:id
SiswaRouter.put('/:id', (req, res, next) => {
  //mengambil data body untuk sebagai data update 
  const bodySiswa = req.body;
  //mengambil data param sebagai id data yang akan di update 
  const idEdit = req.params.id;
  //membuat fungsi update data siswa
  const updatedbSiswa = (id, dataSiswa) => {
    //cari data yang id nya sesuai dengan map
    dbDataSiswa = dbDataSiswa.map(dtSiswa => {
      // jika id data sesuai
      if (dtSiswa.id === id) {
        // update data dengan data yang di kirim dari body
        dtSiswa.first_name = dataSiswa.first_name
        dtSiswa.last_name = dataSiswa.last_name
      }
      // kembalikan datanya
      return dtSiswa
    })
    //satukan dengan semua data siswa
    return dbDataSiswa
  }
  // panggil fungsi data siswa dengan mengirim parameter id dan body
  updatedbSiswa(idEdit, bodySiswa)
  //cari data siswa dengan idEdit
  const dataRespon = getdbSiswaId(idEdit)
  //kirimkan respon json data yang telah di edit dari hasil pencarian
  res.json({ data: dataRespon })
})