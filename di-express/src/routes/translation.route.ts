import TranslationController from "../controllers/translation.controller";
import { Router } from "express";


const translationRouter = Router();
const controller = new TranslationController();

translationRouter.post("/", controller.post);
translationRouter.get("/", controller.get);
translationRouter.put("/", controller.put);
translationRouter.delete("/", controller.delete);

export default translationRouter;
