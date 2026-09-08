// Spread Operator dan Rest Parameter

const users = ["Aang", "Mamat", "Asep"];

// Spread Operator
const newUsers = [...users, "Sintia", "Adel", "Fitri"];

console.table(newUsers);

// Rest Parameter
function showNames(...names) {
  if (names.length <= 0) {
    return console.log("Tidak ada nama!");
  }

  let num = 1;
  for (const name of names) {
    console.log(`Nama ke ${num} adalah ${name}`);
    num++;
  }
}

showNames(...users, "Dian", "Dea");
