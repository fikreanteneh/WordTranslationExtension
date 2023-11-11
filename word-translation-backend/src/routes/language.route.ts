import { Router } from "express";
import TranslationController from "../controllers/language.controller";

const translationRouter = Router();
const controller = new TranslationController();

translationRouter.post("/", controller.post);
translationRouter.get("/", controller.get);
translationRouter.delete("/:Language", controller.delete);

export default translationRouter;
