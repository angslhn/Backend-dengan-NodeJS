// Tipe data dan cek tipe data

// == Primitif -> Sederhana menampung 1 jenis tipe data ==
// 1. String
const nama = 'Asep'

// 2. Number
const angkaBulat = 10
const angkaDesimal = 2.5

// 3. Boolean
const sayaSiswa = false
const sayaMahasiswa = true

// 4. Null
const dataSiswa = null

// 5. Undefined
const kemarinHujan = undefined


// == Non Primitif -> Kompleks bisa menyimpan berbagai tipe data ==
// 1. Array
const mahasiswa = [1, 'Aang Solihin', 2, 'Asep Hidayat', 3, 'Mamat Saefullah']

// 2. Object
const dataMahasiswaPertama = {
  nim: 240160121001,
  nama: 'Aang Solihin',
  sudahLulus: false
}

// 3. Fungsi
const tampilkanNama = (nama) => {
  console.log('Nama saya adalah ' + nama)
}

tampilkanNama('Dimas Sanjaya')


// Mengetahui tipe data dari variabel
console.log('Tipe datanya adalah = ' + typeof nama)