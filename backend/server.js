import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xxs from "xxs";
import mongoSanitize from "mongo-sanitize";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

//MONGODB CONNECTION
