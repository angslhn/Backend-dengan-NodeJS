// Fungsi

// 1. Fungsi biasa
function helloWorld() {
  console.log('Hello World!')
}

helloWorld()

// 2. Fungsi dengan parameter
function tampilkanNama(nama) {
  console.log(`Hallo, nama saya adalah ${nama}!`)
}

tampilkanNama('Aang Solihin')

// 3. Fungsi dengan parameter dan kembalian
function pertambahan(a, b) {
  return a + b
}

const hasilTambah = pertambahan(12, 12)

console.log(hasilTambah)

// 4. Fungsi arrow
const ucapanSelamat = () => {
  console.log('Selamat datang!')
}

// 5. Fungsi arrow dengan parameter dan kembalian
const pembagian = (a, b) => {
  return a / b
}

const hasilBagi = pembagian(12, 3)

console.log(hasilBagi)

// 6. Fungsi anonim
const perkalian = function(a, b) {
  return a * b
}

const hasilKali = perkalian(5, 5)

console.log(hasilKali)