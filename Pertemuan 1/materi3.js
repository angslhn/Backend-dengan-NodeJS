// Tipe data dan cek tipe data

// == Primitif -> Sederhana menampung 1 jenis tipe data ==
// String
const fullname = "Asep Saefudin";

// Number
const integer = 10;
const decimal = 2.5;

// Boolean
const isStudent = false;
const isPolice = true;

// Null
const data = null;

// Undefined
const isRaining = undefined;

// == Non Primitif -> Kompleks bisa menyimpan berbagai tipe data ==
// Array
const students = ["Aang Solihin", "Asep Hidayat", "Mamat Saefullah"];

// Object
const firstStudent = {
  nim: 240160121001,
  nama: "Aang Solihin",
  lulus: false,
};

// Fungsi
const showName = (nama) => {
  console.log("Nama saya adalah " + nama);
};

showName("Dimas Sanjaya");

// Mengetahui tipe data dari variabel
console.log("Tipe datanya adalah = " + typeof nama);
