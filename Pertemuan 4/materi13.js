// Array
// Data pertama yang ada di Array index-nya selalu dimulai dari 0

// Membuat Array
const fruits = ["Apel", "Jeruk"];

const users = new Array("Aang", "Asep", "Mamat", "Acuy");

// Akses Array
console.log(fruits.at(0)); // Apel
console.log(users[3]); // Acuy

// Perulangan Array
// Cara 1:
for (const user of users) {
  console.log(user);
}

// Cara 2:
fruits.forEach((fruit) => console.log(fruit));

// Ubah isi Array
fruits[0] = "Semangka";
console.log(fruits[0]); // Semangka

let newFruits = fruits.with(1, "Pisang");
console.log(fruits[1]); // Pisang

// Cek index data di Array
console.log(users.indexOf("Asep")); // 1

// Cek data di Array
console.log(users.includes("Acuy")); // true

// Tambah data baru (urutan terakhir)
console.log(users.push("Siti", "Firman"));

// Tambah data baru (urutan awal)
console.log(users.unshift("Dimas", "Farel"));

// Hapus data (urutan terakhir)
console.log(users.pop());

// Hapus data (urutan awal)
console.log(users.shift());

// Mengurutkan posisi data Array
console.log(fruits.sort());

// Membalikan posisi data Array
console.log(users.reverse());

// Destructuring Array
const nums = [12, 24];

const [firstNum, secondNum] = nums;

console.log(firstNum);
console.log(secondNum);
