// String dan Methodnya

const nama = 'Aang Solihin'

// 1. Menghitung panjang string
console.log(nama.length)

// 2. Mengubah huruf besar semua
console.log(nama.toUpperCase())

// 3. Mengubah huruf kecil semua
console.log(nama.toLowerCase())

// 4. Mengecek huruf atau kata
console.log(nama.includes('Aang'))
console.log(nama.includes('Mamat'))

// 5. Memotong Sebagian
console.log(nama.slice(0, 4))  // Huruf pertama dimulai dari posisi 0 dan lebihkan 1 dari posisi huruf akhir
console.log(nama.slice(5, 12))  // Jika tau posisi huruf akhir, maka bisa di masukan sebagai parameter kedua
console.log(nama.slice(5))  // Jika tidak tau posisi huruf terakhir, maka cukup masukan posisi huruf pertama saja sebagai parameter

// 6. Mengganti huruf atau kata
console.log(nama.replace('Aang', 'Asep'))

// 7. Membagi atau Memecah (*Ini akan menjadi Array)
console.log(nama.split(''))  // Pecah semua huruf
console.log(nama.split(' '))  // Pecah jika ada spasi

// 8. Menggabung Dari Array
const kalimat = ['Aku', 'Sudah', 'Makan']

console.log(kalimat.join(' '))  // Nilai harus diisi separator, jika harus perlu spasi maka isi ' ' dan jika tidak perlu ''

// 9. Menghapus Spasi (*Kiri atau Kanan)
const alamat = '     Asli Sumedang     '
console.log(alamat)
console.log(alamat.trim())


// 10. Menggabung String
const namaDepan = 'Asep'
const namaBelakang = 'Saefullah'

// Cara 1:
console.log(namaDepan + ' ' + namaBelakang)

// Cara 2:
console.log(`${namaDepan} ${namaBelakang}`)

// Cara 3:
console.log(namaDepan.concat(' ', namaBelakang))