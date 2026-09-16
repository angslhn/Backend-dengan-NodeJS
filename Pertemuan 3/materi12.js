// Callback

function sapaanSore(nama) {
  console.log(`Selamat sore, ${nama}!`)
}

function prosesPengguna(namaAwal, fungsiCallback) {
  const namaKapital = namaAwal.toUpperCase() 
  
  fungsiCallback(namaKapital) 
}

prosesPengguna('Aang Solihin', sapaanSore)
