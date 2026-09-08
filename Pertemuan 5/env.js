// Export

// Export variabel (named export)
export let NODE_ENV = "development";

// Export Objek (named export)
export const env = {
  get isDevelopment() {
    return NODE_ENV === "development";
  },
  get isProduction() {
    return NODE_ENV === "production";
  },
};

// Export Fungsi (named export)
export function checkEnvironment() {
  if (env.isDevelopment) {
    return console.log("[INFO] Sistem berjalan di mode pengembangan");
  }

  if (env.isProduction) {
    return console.log("[INFO] Sistem berjalan di mode produksi");
  }

  console.log("[INFO] Lingkungan sistem tidak diketahui!");
}

// Export Fungsi (default export)
export default function setEnvironment(value = "development") {
  if (value !== "development" && value !== "production") {
    return console.log("[INVALID] Nilai tidak valid!");
  }

  NODE_ENV = value;

  console.log("[INFO] Perubahan lingkungan sistem berhasil");
}
