import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xxs from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import dbConnection from "./dbConfig/dbConfig.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

//MONGODB CONNECTION
dbConnection();

//middleware
app.use(cors());
app.use(xxs());
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
