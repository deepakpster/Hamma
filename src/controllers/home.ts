import { Request, Response, NextFunction } from "express";
import db from "./../models/index";

export default class HomeController {
  public async sayHello(req: Request, res: Response, next: NextFunction) {
    const employees: any = await db.home.findAll();
    res.status(200).json({ data: employees });
  }
}
