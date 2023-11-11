import BaseError from "../errors/baseError";
import { NextFunction, Request, Response } from "express";

export default function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (error instanceof BaseError) {
    res.status(error.statusCode).json({
      success: false,
      message: null,
      error: error.message,
      statusCode: error.statusCode,
    });
  } else {
    res.status(500).json({
      success: false,
      message: null,
      error: "Something Went Wrong",
      statusCode: 500,
    });
  }
}
