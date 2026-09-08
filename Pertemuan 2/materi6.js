// Percabangan dan Switch

// == IF (Jika)==
const isNight = true;

if (isNight === true) {
  console.log("Sekarang Malam");
}

const imasIsGirl = true;
const haniIsGirl = true;

if (imasIsGirl && haniIsGirl) {
  console.log("Imas dan Hani sama mereka adalah perempuan");
}

// == IF Else (Selain Jika) ==
const grade = 95;

if (grade >= 90 && grade <= 100) {
  console.log("Dapat Donat");
} else if (grade >= 80 && grade < 90) {
  console.log("Dapat Es Krim");
} else if (grade >= 70 && grade < 80) {
  console.log("Dapat Permen");
}

// == Else (Selain Itu) ==
const dinaHasCandy = "Tidak";

if (dinaHasCandy === "Iya") {
  console.log("Dina Punya Permen");
} else {
  console.log("Dina Tidak Punya Permen");
}

const hour = 19;

if ((hour >= 18 && hour <= 24) || (hour >= 0 && hour < 3)) {
  console.log("Sekarang Malam");
} else if (hour >= 3 && hour < 5) {
  console.log("Sekarang Dini Hari");
} else if (hour >= 5 && hour < 10) {
  console.log("Sekarang Pagi");
} else if (hour >= 10 && hour < 15) {
  console.log("Sekarang Siang");
} else if (hour >= 15 && hour < 18) {
  console.log("Sekarang Sore");
} else {
  console.log("Jam Tidak Valid");
}

// == Switch ==

const day = 1;

switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jum'at");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;
  default:
    console.log("Hari Tidak Valid");
}
