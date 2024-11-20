import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables from a .env file into process.env
dotenv.config();

// Environment flags
export const DEVELOPMENT = process.env.NODE_ENV === "development";
export const QA = process.env.NODE_ENV === "qa";
export const PRODUCTION = process.env.NODE_ENV === "production";

// MongoDB connection configuration
export const MONGO_USER = process.env.MONGO_USER || "student";
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "aaAWWITGguLjWOD2";
export const MONGO_URL = process.env.MONGO_URL || "socialnetworkingplatfor.7vjvk.mongodb.net";
export const MONGO_DB = process.env.MONGO_DB || "social_platform"; // Renamed for clarity
export const MONGO_OPTIONS: mongoose.ConnectOptions = {
  retryWrites: true,
  w: "majority",
};

// Construct the MongoDB connection string
export const MONGO_CONNECTION = `mongodb+srv://${MONGO_USER}:${encodeURIComponent(
  MONGO_PASSWORD
)}@${MONGO_URL}/${MONGO_DB}?retryWrites=true&w=majority`;

// Server configuration
export const SERVER_HOSTNAME = process.env.SERVER_HOST || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

// Grouped MongoDB configuration
export const mongo = {
  user: MONGO_USER,
  password: MONGO_PASSWORD,
  url: MONGO_URL,
  database: MONGO_DB,
  options: MONGO_OPTIONS,
  connectionString: MONGO_CONNECTION,
};

// Grouped server configuration
export const server = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

// Export grouped configurations as
