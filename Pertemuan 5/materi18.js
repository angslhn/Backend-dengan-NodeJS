// Promise & Async/Await

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AVAILABLE_STOCK = 10;

// Promise
const orderChickenCrispy = () =>
  new Promise(async (resolve, reject) => {
    console.log("[INFO] Memproses pemesanan");

    await delay(2000);

    // Cek stok masih tersedia
    const isAvailableStock = AVAILABLE_STOCK > 0;

    // Jika stok tidak tersedia
    if (!isAvailableStock) {
      reject("[INFO] Stok ayam krispi habis!");
    }

    // Stok tersedia
    resolve("[INFO] Pemesanan ayam krispi dikirimkan");
  });

// Mengakses Promise
//   Cara 1 dengan Then:
orderChickenCrispy()
  .then((message) => console.info(message))
  .catch((error) => console.log(error))
  .finally(() => console.log("[INFO] Pemesanan selesai"));

//   Cara 2 dengan Await:
async function order() {
  try {
    const message = await orderChickenCrispy();
    console.log(message);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("[INFO] Pemesanan selesai");
  }
}

order();
