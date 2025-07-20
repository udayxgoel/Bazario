import express from "express";
import connectDB from "./config/dbConfig.js";
import "dotenv/config";
import cookieParser from "cookie-parser";

// Express App
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});
