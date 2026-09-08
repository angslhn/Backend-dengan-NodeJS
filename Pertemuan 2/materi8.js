// == String dan Method-nya ==

const fullname = "Aang Solihin";

// Menghitung panjang string
console.log(fullname.length);

// Mengubah semua huruf menjadi huruf besar
console.log(fullname.toUpperCase());

// Mengubah semua huruf menjadi huruf kecil
console.log(fullname.toLowerCase());

// Mengecek apakah string mengandung kata atau huruf tertentu
console.log(fullname.includes("Aang"));
console.log(fullname.includes("Mamat"));

// Memotong Sebagian (Slice)
console.log(fullname.slice(0, 4)); // Memotong dari indeks ke-0 hingga sebelum indeks ke-4
console.log(fullname.slice(5, 12)); // Memotong dari indeks ke-5 hingga sebelum indeks ke-12
console.log(fullname.slice(5)); // Memotong dari indeks ke-5 sampai akhir string

// Mengganti kata atau huruf tertentu
console.log(fullname.replace("Aang", "Asep"));

// Membagi atau memecah string menjadi Array
console.log(fullname.split("")); // Memecah setiap karakter menjadi elemen array
console.log(fullname.split(" ")); // Memecah berdasarkan spasi menjadi elemen array

// Menggabungkan elemen Array kembali menjadi String
const words = ["Aku", "Sudah", "Makan"];
console.log(words.join(" ")); // Menggabungkan array menjadi string dengan separator spasi (' ')

// Menghapus spasi di awal dan akhir string (Whitespace)
const address = "     Asli Sumedang     ";
console.log(address);
console.log(address.trim());

// Penggabungan String (String Concatenation)
const firstName = "Asep";
const lastName = "Saefullah";

// Cara 1: Menggunakan operator plus (+)
console.log(firstName + " " + lastName);

// Cara 2: Menggunakan Template Literals (Direkomendasikan)
console.log(`${firstName} ${lastName}`);

// Cara 3: Menggunakan method concat()
console.log(firstName.concat(" ", lastName));
