## ARRAY

## 1. Membuat Array

1. Create

```
var points = [38, 2348, 834, 69,7 ]
const points1 = new Array(32, 85, 92, 254, 21, 7)
let points2 = [92, 839, 92, 91, 46, 78, 3]
```

2. Tampilkan isi dalam array ke 0

```
console.log(points[0]); //38
console.log(points1[0]); //32
console.log(points2[3]); //91
```

3. Periksa jumlah isi array

```
console.log(points.length); //5
console.log(points1.length); //6
console.log(points2.length); //7
```

4. Periksa jika array kosong

```
if (points.length === 0) {
  console.log('Arrayis empty');
} else {
  console.log('Array is not empty'); //'Array is not empty'
}
```

5. Periksa apakah variable tersebut adalah array

```
if (Array.isArray(points)) {
  console.log('myArray is an array'); //'myArray is an array'
} else {
  console.log('myArray is not an array');
}
```

6. Mencari kata dalam isi array >> output variable

```
const benda = ['pulpen', 'tas', 'kursi', 'meja', 'buku']
// Mencari kata "tas" dalam array
const foundBenda = benda.find((benda) => benda === 'tas');
console.log('Found Benda:', foundBenda);  //['Found Benda:', 'tas']
```

7. Mencari angka >3 dalam array >> output variable

```
const angka = [9, 5, 7, 2, 8];
// Mencari angka lebih besar dari 8 pertama dalam array
const greaterThanThree = angka.find((angka) => angka > 8);
console.log('First number greater than 8:', greaterThanThree); //['First number greater than 8:', 9]
```

8. Memeriksa apakah array mengandung variable tertentu >> output boolean true/false

```
const buah = ['pisang', 'kurma', 'kelengkeng', 'alpukat'];
// Memeriksa apakah 'alpukat' ada dalam array
const hasAlpukat = buah.includes('alpukat');
console.log('Has alpukat:', hasAlpukat); //['Has alpukat:', true]
// Memeriksa apakah 'anggur' ada dalam array
const hasAnggur = buah.includes('anggur'); //['Has anggur:', false]
console.log('Has anggur:', hasAnggur);
```

9. Map >> mengambil isi tiap array dan mengubah isinya >> array baru

```
const numberr = [7, 2, 8, 4, 6];

// for i
for (let i = 3; i < numberr.length; i++) {
  console.log(numberr[i]); //7, 2, 8, 4, 6
}

// forEach
numberr.forEach((numberr) => {
  console.log(numberr); //7, 2, 8, 4, 6
});

// for of
for (const number of numberr) {
  console.log(number); //7, 2, 8, 4, 6
}
```

## 2. Object

1. Bentuk

```
let object = {
  key: 'value'
};
```

2. Cara membuat

```
let user = new Object();
let user1 = {};
```

3. Bisa berisi function >> method

```
const orang = {
  firstName: "Joni",
  lastName: "Done",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
```

4. Melihat isi object
   `console.log(orang.firstName); //'Joni'`

5. Memeriksa isi object >> output true/false

```
const objek = {};
const objek1 = { key: 'value' };

// Memeriksa apakah objek kosong
const isEmptyObjek = Object.keys(objek).length === 0;
console.log('Is objek empty?', isEmptyObjek); //['Is objek empty?', true]

// Memeriksa apakah objek1 kosong
const isEmptyObjek1 = Object.keys(objek1).length === 0;
console.log('Is objek1 empty?', isEmptyObjek1); //['Is objek1 empty?', false]
```

## 3. Array Object

1. Create

```
let arrayKu = [
  { "id": 1, "name": "Aice" },
  { "id": 2, "name": "Quantum" },
  { "id": 3, "name": "Potter" }
];
```

2. Periksa jumlah nya >> seperti operasi array
   `console.log(arrayKu.length) //3`

3. FIND >> mencari isinya

- perintah dasar find

```
let result = arr.find(function (item, index, array) {
  // is true is returned, item is retruned and iteration is stopped
  // for falsy scenario returns undefined
})
```

The function is called for elements of the array, one after another :
Item is the elements, Index is its index, Array is the array itself

- find >> mencari id = 1

```
let users = [
  { id: 1, "name": "Primogem" },
  { id: 2, "name": "Pity" },
  { id: 3, "name": "IF"}
];

let userr = users.find(item => item.id == 1)
console.log(userr.name); // "Primogem"

//Find the index of the first Primogem
console.log(users.findIndex(user => user.name == 'Primogem')) //0
```

4. PUSH >> menambahkan object ke dalam array

```
//ADD >> PUSH
//Menambahkan object ke dalam array
const arrayAku = [];
const objekKu = { nama: "Joko", umur: 30 }
arrayAku.push(objekKu)
```

5. Melihat isi dalam array object

```
//GET
// Mengakses properti objek dalam array
const akuArray = [{ nama: "Joko", umur: 38 }, { nama: "Jesika", umur: 25 }]
console.log(akuArray[0].nama); //Joko
console.log(akuArray[1].umur); //25
```

6. Mengubah nilai object tertentu

```
//UPDATE
//Mengubah properti object dalam array
const akuArray = [{ nama: "Joko", umur: 38 }, { nama: "Jesika", umur: 25 }]
akuArray[0].umur =  35
console.log(akuArray[0].umur);
```

7. Menghapus isi salah satu object dalam array

```
//DELETE
//Menghapus object dari array berdasarkan index:
akuArray.splice(0, 1)
console.log(akuArray);

//Menghapus object dari array berdasarkan properti tertentu:
const akuArrayy = [{ nama: "Joko", umur: 38 }, { nama: "Jesika", umur: 25 }]
const indexs = akuArrayy.findIndex(object => object.nama === "Joko")
akuArrayy.splice(indexs, 1)
console.log(akuArrayy);
```

2. MAP

```
//GET >> MAP >> menampilkan semua array
// Array object dengan daftar pengguna
const userss = [
  { name: "Aice", umur: 20 },
  { name: "Boby", umur: 24 },
  { name: "Charlotte", umur: 27 }
]

// Menggunakan metode map() untuk membuat array baru
const userStrings = userss.map((user) => {
  return `${user.name} ${user.umur}`
})

// Mencetak array baru yang telah di buat
console.log(userStrings);
```

3. FILTER >> berdasarkan kriteria tertentu

```
//GET >> FILTER
//filter umur diatas 25
//Menggunakan metode filter() untuk memfilter array object berdasarkan kriteria tertentu:
const akuArraayy = [{ nama: "Joko", umur: 38 }, { nama: "Jesika", umur: 25 }]
const newArray = akuArraayy.filter(object => object.umur > 30)
console.log(newArray);

//GET >> FIND
//metode find() untuk mencari object dalam array berdasarkan kriteria tertentu:
const userrss = [
  { name: "Aice", umur: 20 },
  { name: "Boby", umur: 24 },
  { name: "Charlotte", umur: 27 }
]

//mencari object dengan nama "Charlotte"
const objectCharlotte = userrss.find(object => object.name === "Charlotte")
console.log(objectCharlotte);

//Mencari object dengan umur di atas 30
const objectDiAtas25 = userrss.find(object => object.umur > 25)
console.log(objectDiAtas25);
```

4. LOOPING

```
// Array object dengan data pengguna
const useerrss = [
  { name: "Aice", umur: 20 },
  { name: "Boby", umur: 24 },
  { name: "Charlotte", umur: 27 }
]

//menggunakan loop for...of untuk mengiterasi array object
for (const user of useerrss) {
  console.log(`Name: ${user.name}, umur: ${user.umur}`);
}
```

## 4. FUNCTION

- Function biasa

```
function greet() {
  console.log("Hello!");
}

greet();
```

- Fungsi dengan parameter

```
function greet(name) {
  console.log("Hello " + name + "!");
}

greet("Furina");
```

- Fungsi dengan nilai kembalian / return

```
function add(a, b) {
  return a + b;
}

let result = add(2, 4)
console.log(result);
```

- Fungsi anonim (tanpa nama)

```
let greet1 = function (name) {
  console.log("Hello " + name + "!");
}

greet1("Hu Tao");
```

- Fungsi arrow

```
let greet2 = function (name) {
  console.log("Hello " + name + "!");
}

greet2("Kazuha");
```

## 5. CALLBACK FUNCTION

Function >> Function2 , function 2 dijalankan walau function 1 belum selesai, biasanya operasi asyncroun

```
function fungsiSatu(name, callback) {
  console.log('Hello ' + name + '!');

  // Simulasi penundaan 1 detik
  setTimeout(function () {
    //fungsi callback >> dipanggil setelah timer 1 detik selesai
    callback()
  }, 1000)
}

function fungsiDua() {
  console.log('Goodbye!');
}

// Memanggil fungsi greeting dengan callback farewell
fungsiSatu('Xiao', fungsiDua);
```

Operasi ini seperti fungsi pemanggilan data ke server yang akan membutuhkan waktu / tertunda / asynchrounc

```
async function fetchData() {
  // Melakukan operasi asynchronous
  return 'Data';
}
```

```
async function fetchData() {
  let result = await fetch('https://api.example.com/data');
  let data = await result.json();
  return data;
}
```
