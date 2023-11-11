import cors from "cors";
import express from "express";
import "reflect-metadata";
import translationRouter from "./routes/translation.route";
import languageRouter from "./routes/language.route";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hey you i'm here...");
});

// all the routes here
app.use("/api/Language", languageRouter);
app.use("/api/Translation", translationRouter);

// Error handling todo
app.use((err: any, req: any, res: any, next: any) => { 
  console.log(err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong",
  })
})

export default app;
