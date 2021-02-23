import { NextFunction, Request, Response } from "express";
import BaseRoute from "./BaseRoute";
import HomeController from "./../controllers/home";

export default class HomeRoute extends BaseRoute {
  constructor() {
    super(HomeController);
  }

  public routes() {
    this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new this.controller().sayHello(req, res, next);
    });
  }
}
