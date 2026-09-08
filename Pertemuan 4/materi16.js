// Objek

// Membuat objek
const mahasiswa = {
  nama: "Aang Solihin",
  nim: 240160121001,
  kelas: "IF-VA",
  program_studi: "Informatika",
  fakultas: "Fakultas Teknologi Informasi",
  universitas: "Universitas Sebelas April",
};

console.table(mahasiswa);

// Mengakses properti objek
const nama = mahasiswa.nama;
console.log(nama);

const nim = mahasiswa["nim"];
console.log(nim);

// Menambah properti baru
mahasiswa.kota = "Sumedang";
console.log(mahasiswa.kota);

// Menghapus properti
mahasiswa.status = "Lajang";
console.log(mahasiswa.status);

delete mahasiswa.status;
console.table(mahasiswa);

// Iterasi pada objek
for (let field in mahasiswa) {
  console.log(mahasiswa[field]);
}

// Menggabung objek
const firstObject = { w: 8, x: 17 };
const secondObject = { y: 15, z: 25 };

const mergedObject = Object.assign({}, firstObject, secondObject);
console.table(mergedObject);

// Destructuring objek
const { kelas, program_studi, fakultas } = mahasiswa;

console.table([kelas, program_studi, fakultas]);
