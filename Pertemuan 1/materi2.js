// Variabel
// Untuk menyimpan nilai tertentu bisa bertipe string, number, array, objek, fungsi

// const
// Nilai tidak bisa diubah setelah didefinisikan (Direkomendasikan untuk nilai yang konstan)
const firstName = "Aang Solihin";
console.log("Nama Orang Pertama = " + firstName);

// let
// Nilai bisa diubah setelah didefinisikan (Direkomendasikan jika nilai variabel dapat berubah nantinya, memiliki block scope)
let secondName = "Asep Saefullah";
console.log("Nama Orang Kedua = " + secondName);

// var
// Nilai bisa diubah setelah didefinisikan (Tidak direkomendasikan dalam JavaScript modern karena memiliki function scope dan dapat menyebabkan bug akibat hoisting)
var thirdName = "Mamat Hidayat";
console.log("Nama Orang Ketiga = " + thirdName);

// Tes ubah variabel
secondName = "Dian Sureja";
console.log("Nama Orang Kedua = " + secondName);
