import { Product } from "../interfaces/product";

// Function to generate a random date within a range
function getRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate a random product
export function generateRandomProduct(id: number): Product {
  const productCode = `PROD-${id}`;
  const title = `Product ${id}`;
  const price = Math.random() * 3000; // Random price between 0 and 3000
  const created = getRandomDate(new Date(2020, 0, 1), new Date()); // Random date between 2020-01-01 and now
  const tags = Math.random() < 0.5 ? undefined : `Tag ${id}`; // Optional tags with 50% probability
  const vendor = `Vendor ${id % 10}`;
  const category = `Category ${id % 5}`;

  return {
    id,
    productCode,
    title,
    price,
    created,
    tags,
    vendor,
    category,
  };
}
