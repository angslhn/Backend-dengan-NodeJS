// Operator Perbandingan dan Logika


// == Operator Perbanding ==
// 1. Lebih Besar Dari | > |
const lebihDari = 10 > 8
console.log(lebihDari)

// 2. Lebih Dari atau Sama Dengan | >= |
const lebihDariAtauSamaDengan = 10 >= 8
console.log(lebihDariAtauSamaDengan)

// 3. Kurang Dari | < |
const kurangDari = 5 < 10
console.log(kurangDari)

// 4. Kurang Dari | <= |
const kurangDariAtauSamaDengan = 5 <= 10
console.log(kurangDariAtauSamaDengan)

// 5. Sama Dengan | == |
const samaDengan = 10 === 10
console.log(samaDengan)

// 6. Sama Dengan Identik | === |
const samaDenganIdentik = 10 === '10'
console.log(samaDenganIdentik)

// 7. Tidak Sama Dengan | != |
const tidakSamaDengan = 10 != 10
console.log(tidakSamaDengan)

// 8. Tidak Sama Dengan Identik | !== |
const tidakSamaDenganIdentik = 10 !== 10
console.log(tidakSamaDenganIdentik)


// == Operator Logika ==
// 1. AND | && |
let apakahTrue = true && true  // Jika salah satu nilainya 'false' maka akan 'false, wajib 'true' semua jika ingin 'true'
console.log(apakahTrue)

// 2. OR | || |
apakahTrue = true || false  // Nilainya akan bernilai 'true' jika salah satunya ada 'true', akan bernilai 'false' jika semua nilainya 'false'
console.log(apakahTrue)

// 3. NOT | ! |
apakahTrue = !true  // Membalikan nilai aslinya semisal 'true' akan menjadi 'false' jika di NOT kan, dan sebaliknya jika 'false' akan menjadi 'true' 
console.log(apakahTrue)