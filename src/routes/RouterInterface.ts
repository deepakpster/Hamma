import * as express from "express";

interface RouterInterface {
  router: express.Router;
  routes(): void;
}

export default RouterInterface;
