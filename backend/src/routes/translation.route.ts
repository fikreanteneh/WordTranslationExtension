import express from "express";
import TranslationController from "../controllers/translation.controller";

const translationRouter = express.Router();
const controller = new TranslationController();

translationRouter.get("/", controller.get);

export default translationRouter;
