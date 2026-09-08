// Custom Error & Try, Catch, dan Finally

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Custom Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = ValidationError;
  }
}

// Check Age
function checkAllowedAge(value) {
  if (value < 18) {
    throw new ValidationError(
      "Tidak diperbolehkan! Umur minimal adalah 18 tahun.",
    );
  }

  return "Anda diperbolehkan!";
}

// Try, Catch, dan Finally
try {
  console.log("[INFO] Memulai pemeriksaan umur...");

  await delay(2000);

  const message = checkAllowedAge(17);

  await delay(2000);

  console.info(`[INFO] ${message}`);

  await delay(2000);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`[INVALID] Validation: ${error.message}`);
  } else {
    console.log(`[FATAL] Error: ${error.message}`);
  }

  await delay(2000);
} finally {
  console.log("[INFO] Pemeriksaan umur selesai...");
}
