// Callback

function showGreeting(name) {
  console.log(`Selamat sore, ${name}!`);
}

function processUser(name, callback) {
  const normalizeName = name.toUpperCase();

  callback(normalizeName);
}

processUser("Aang Solihin", showGreeting);
