// Fungsi

// Regular Function
function helloWorld() {
  console.log("Hello World!");
}

helloWorld();

// Function dengan Parameter
function showName(nama) {
  console.log(`Hallo, nama saya adalah ${nama}!`);
}

showName("Aang Solihin");

// Function dengan Parameter dan Return
function add(a, b) {
  return a + b;
}

const hasilTambah = add(12, 12);

console.log(hasilTambah); // 24

// Arrow Function
const greeting = () => {
  console.log("Selamat datang!");
};

greeting();

// Arrow Function dengan Parameter dan Return
const division = (a, b) => {
  return a / b;
};

const divisionResult = division(12, 3);

console.log(divisionResult); // 4

// Anonymous Function
const multiply = function (a, b) {
  return a * b;
};

const multiplyResult = multiply(5, 5);

console.log(multiplyResult); // 25

// Implicit Return Arrow Function
const square = (num) => num * num;

const squareResult = square(4);

console.log(squareResult); // 16

// Default Parameter Function
const registerUser = (username = "Tamu") => {
  console.log(`Halo, ${username}! Selamat datang di sistem.`);
};

registerUser();

registerUser("Aang Solihin");

// Rest Parameter Function
const sumAll = (...numbers) => {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }
  return total;
};

const totalSum = sumAll(5, 10, 15, 20);

console.log(totalSum); // 50

// Recursive Function
const countdown = (n) => {
  if (n <= 0) {
    console.log("Selesai!");
    return;
  }

  console.log(n);

  countdown(n - 1);
};

countdown(3);

// IIFE (Immediately Invoked Function Expression)
(() => {
  const message = "Fungsi ini berjalan secara otomatis!";

  console.log(message);
})();
