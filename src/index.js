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