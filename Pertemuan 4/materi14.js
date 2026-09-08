// HOF (High Order Function)
// Semua fungsi dari array yang sering digunakan

const users = [
  ["Maman", 21],
  ["Asep", 23],
  ["Aang", 21],
  ["Firman", 25],
  ["Udin", 20],
  ["Aep", 25],
];

const numbers = [34, 21, 43, 40, 20, 15, 25];

// map()
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers); // [68, 42, 86, 80, 40, 30, 50]

// filter()
const newUsers = users.filter((user) => user[1] >= 25);
console.log(newUsers); // [['Firman', 25], ['Aep', 25]]

// reduce()
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // 198

// forEach()
users.forEach((user) => {
  console.log("-".repeat(15));
  console.log(`Nama = ${user[0]}`);
  console.log(`Umur = ${user[1]}`);
});

// sort()
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers); // [15, 20, 21, 25, 34, 40, 43]

// find()
const foundUser = users.find((user) => user[0].includes("Aa"));
console.log(foundUser); // ['Aang', 21]
