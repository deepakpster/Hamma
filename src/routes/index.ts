import { NextFunction, Request, Response, Application } from "express";
import AuthMiddelware from "./../middlewares/Auth";
import HomeRoute from "./HomeRoute";

export default class Index {
  constructor(app: any) {
    this.loadRoutes(app);
  }
  loadRoutes(app: Application) {
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      res.status(500).json(err);
    });

    app.use("/", AuthMiddelware.validate, new HomeRoute().router);
  }
}
