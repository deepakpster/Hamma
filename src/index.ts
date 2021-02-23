import express from "express";
import compression from "compression"; // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import path from "path";
import passport from "passport";
import bluebird from "bluebird";

import db from "./models/index";

import AppRoutes from "./routes/Index";

// Create Express server
const app = express();
// Connect to MySQL
console.log("db", db);
// mongoose.Promise = bluebird;

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

/**
 * Primary app routes.
 */
const appRoutes = new AppRoutes(app);

export default app;
