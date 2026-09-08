// Variabel
// Untuk menyimpan nilai tertentu bisa bertipe string, number, array, objek, fungsi

// 1. const -> Tidak bisa diubah setelah di definisikan (Direkomendasikan)
const namaOrangPertama = 'Aang Solihin'
console.log('Nama Orang Pertama = ' + namaOrangPertama)

// 2. let -> Bisa diubah setelah di definisikan (Direkomendasikan, jika nilai bisa saja berubah)
let namaOrangKedua = 'Asep Saefullah'
console.log('Nama Orang Kedua = ' + namaOrangKedua)

// 3. var -> Bisa diubah setelah di definisikan (Tidak direkomendasikan, rawan bug karena scope bisa ter-hoisting)
var namaOrangKetiga = 'Mamat Hidayat'
console.log('Nama Orang Ketiga = ' + namaOrangKetiga)

// Tes ubah variabel
namaOrangKedua = 'Dian Sureja'
console.log('Nama Orang Kedua = ' + namaOrangKedua)