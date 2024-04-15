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

## 2. object

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
