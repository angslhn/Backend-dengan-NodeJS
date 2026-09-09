// Percabangan dan Switch


// == IF (Jika)==
const sekarangMalam = true

if (sekarangMalam === true) {
  console.log('Sekarang Malam')
}

const imasPerempuan = true
const haniPerempuan = true

if (imasPerempuan && haniPerempuan) {
  console.log('Imas dan Hani sama mereka adalah perempuan')
}

// == IF Else (Selain Jika) ==
const nilai = 101

if (nilai >= 90 && nilai <= 100) {
  console.log('Dapat Donat')
} else if (nilai >= 80 && nilai < 90) {
  console.log('Dapat Es Krim')
} else if (nilai >= 70 && nilai < 80) {
  console.log('Dapat Permen')
}

// == Else (Selain Itu) ==
const dinaPunyaPermen = 'Tidak'

if (dinaPunyaPermen === 'Iya') {
  console.log('Dina Punya Permen')
} else {
  console.log('Dina Tidak Punya Permen')
}

const jam = 19

if (jam >= 18 && jam <= 24 || jam >= 0 && jam < 3) {
  console.log('Sekarang Malam')
} else if (jam >= 3 && jam < 5) {
  console.log('Sekarang Dini Hari')
} else if (jam >= 5 && jam < 10) {
  console.log('Sekarang Pagi')
} else if (jam >= 10 && jam < 15) {
  console.log('Sekarang Siang')
} else if (jam >= 15 && jam < 18) {
  console.log('Sekarang Sore')
} else {
  console.log('Jam Tidak Valid')
}

// == Switch ==

const hariIni = 1

switch (hariIni) {
  case 1:
    console.log('Senin')
    break
  case 2:
    console.log('Selasa')
    break
  case 3:
    console.log('Rabu')
    break
  case 4:
    console.log('Kamis')
    break
  case 5:
    console.log('Jum\'at')
    break
  case 6:
    console.log('Sabtu')
    break
  case 7:
    console.log('Minggu')
    break
  default:
    console.log('Hari Tidak Valid')
}