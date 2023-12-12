const xmasGifts = [
  "guitar 🎸",
  "skates ⛸️",
  "bear 🧸",
  "magnet 🧲",
  "laptop 💻",
  "games console 🎮 ",
  "jewellery 💍",
  "kite 🪁",
];

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.
 **/

const sortedAZ = xmasGifts.sort((a, b) => (a > b ? 1 : -1));
console.log("A-Z: ", sortedAZ);

//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

const sortedZA = xmasGifts.sort((a, b) => (a > b ? -1 : 1));
console.log("Z-A: ", sortedZA);
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]
