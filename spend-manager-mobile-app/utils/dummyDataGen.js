const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const generateRefNo = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// Define sample merchants and categories
const merchants = [
  "Amazon",
  "Nawaab",
  "Book shop",
  "Licious",
  "Blinkit",
  "Dostea",
];
const categories = [
  "food-items",
  "junk-food",
  "travel",
  "groceries",
  "electronics",
  "office",
  "book",
];
export const generateDummyData = () =>
  Array.from({ length: 20 }, () => ({
    merchant: merchants[getRandomInt(0, merchants.length - 1)],
    date: randomDate(new Date(2024, 4, 4), new Date(2024, 4, 5)),
    amount: getRandomInt(5, 500),
    category: categories[getRandomInt(0, categories.length - 1)],
    refNo: generateRefNo(7),
  }));
