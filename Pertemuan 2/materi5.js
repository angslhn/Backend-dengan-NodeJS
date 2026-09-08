// Operator Perbandingan dan Logika

// == Operator Perbanding ==
// Lebih Besar Dari | > |
const isGreaterThan = 10 > 8;
console.log(isGreaterThan);

// Lebih Dari atau Sama Dengan | >= |
const isGreaterThanOrEqual = 10 >= 8;
console.log(isGreaterThanOrEqual);

// Kurang Dari | < |
const isLessThan = 5 < 10;
console.log(isLessThan);

// Kurang Dari atau Sama Dengan | <= |
const isLessThanOrEqual = 5 <= 10;
console.log(isLessThanOrEqual);

// Sama Dengan | == |
const isEqual = 10 === 10;
console.log(isEqual);

// Sama Dengan Identik | === |
const isStrictEqual = 10 === "10";
console.log(isStrictEqual);

// Tidak Sama Dengan | != |
const isNotEqual = 10 != 10;
console.log(isNotEqual);

// Tidak Sama Dengan Identik | !== |
const isStrictNotEqual = 10 !== 10;
console.log(isStrictNotEqual);

// == Operator Logika ==
// AND | && |
let isTrue = true && true; // Menghasilkan 'true' hanya jika kedua nilai bernilai 'true'; jika ada salah satu yang 'false', hasilnya 'false'
console.log(isTrue);

// OR | || |
isTrue = true || false; // Menghasilkan 'true' jika salah satu atau kedua nilai bernilai 'true'; hanya bernilai 'false' jika semua nilai 'false'
console.log(isTrue);

// NOT | ! |
isTrue = !true; // Membalikkan nilai boolean; jika nilai aslinya 'true' menjadi 'false', dan sebaliknya jika 'false' menjadi 'true'
console.log(isTrue);
