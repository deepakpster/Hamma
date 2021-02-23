import { NextFunction, Request, Response, Application } from "express";

export default class Auth {
  public static validate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    console.log("==== Auth Middleware @ Validate ====");
    const authToken =
      req.headers && req.headers[process.env.API_AUTH_HEADER]
        ? req.headers[process.env.API_AUTH_HEADER]
        : false;

    // TODO: Validate the auth token here and return promise

    return new Promise((resolve: any, reject: any) => {
      resolve();
    })
      .then(() => {
        next();
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}
