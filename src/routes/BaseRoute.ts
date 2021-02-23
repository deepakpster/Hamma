import express, { NextFunction, Request, Response, Router } from "express";
import RouterInterface from "./RouterInterface";

export default abstract class BaseRoute implements RouterInterface {
  public router: express.Router;
  public controller: any;

  constructor(ctrl: any) {
    this.controller = ctrl;
    this.router = express.Router();
    this.routes();
  }

  public routes(): void {
    console.log("Routes");
  }
}
