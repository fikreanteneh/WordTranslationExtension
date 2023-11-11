import { NextFunction, Request, Response } from "express";
import responseHandler from "./responseHandler";

export default function handleResponsesAndErrors(func: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(func(req, res, next))
      .then((result) => responseHandler(result, req, res))
      .catch((error) => {
        console.log(error);
        next(error);
      });
  };
}
