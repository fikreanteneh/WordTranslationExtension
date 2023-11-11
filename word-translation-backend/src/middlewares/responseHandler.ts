import { Request, Response } from "express";

const responseHandler = (response: any, req: Request, res: Response) => {
  switch (req.method) {
    case "POST":
      return res.status(201).json({
        success: true,
        message: response,
        error: null,
        statusCode: 201,
      });
    
    case "PUT":
      return res.status(200).json({
        success: true,
        message: response,
        error: null,
        statusCode: 200,
      });
    case "GET":
      return res.status(200).json({
        success: true,
        message: response,
        error: null,
        statusCode: 200,
      });
    case "DELETE":
      return res.status(204).json({
        success: true,
        message: response,
        error: null,
        statusCode: 204,
      });
  }
};
export default responseHandler;
