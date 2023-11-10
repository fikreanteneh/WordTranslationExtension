import express, { NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import * as router from "./routes";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();

// Global Middle-wares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/api/Language", router.languageRouter);
app.use("/api/Translation", router.translationRouter);

// app.use(errorMiddleware);
// Start Express server
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {});
