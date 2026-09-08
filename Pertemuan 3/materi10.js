// Break dan Continue

let value = 20;

let text = "";

// Break
const stopAt = 10;

for (let i = 1; i <= value; i++) {
  text += ` ${i}`;

  if (i === stopAt) {
    break; // Berhenti ketika mencapai 10
  }
}

console.log(text); // 1 2 3 4 5 6 7 8 9 10

// Reset variabel untuk bagian berikutnya
value = 20;

text = "";

// Continue
for (let i = 1; i <= value; i++) {
  if (i % 2 === 1) {
    continue; // Lewati angka ganjil
  }

  text += ` ${i}`;
}

console.log(text); // 2 4 6 8 10 12 14 16 18 20
