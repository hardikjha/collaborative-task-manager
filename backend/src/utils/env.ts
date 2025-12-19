import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string
};

// Safety check
if (!env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL is missing");
}

if (!env.JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is missing");
}
