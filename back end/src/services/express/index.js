import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import bodyParser from "body-parser";
import { errorHandler as queryErrorHandler } from "querymen";
import { errorHandler as bodyErrorHandler } from "bodymen";
import passport from "passport";
import session from "express-session";

import { env } from "../../config";
import { configureJWTStrategy } from "../../api/Student/Passport-Jwt.auth";
import { configureGoogleStrategy } from "../jwt/passport-google";
import { configureTwitterStrategy } from "../jwt/passport-twitter";
import { devConfig } from "../../api/development";
import User from "../../api/Common/StudentRegModel";

export default (apiRoot, routes) => {
  const app = express();
  /* istanbul ignore next */
  if (env === "production" || env === "development") {
    app.use(cors());
    app.use(compression());
    app.use(morgan("dev"));
  }
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(apiRoot, routes);
  app.use(queryErrorHandler());
  app.use(bodyErrorHandler());
  app.use(
    session({
      secret: devConfig.jwtSecret,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize({ userProperty: 'currentUser' }));
  app.use(passport.session());
  configureJWTStrategy();
  configureGoogleStrategy();
  configureTwitterStrategy();
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  app.get("/failure", (req, res) =>
    res.redirect("http://localhost:4200/login")
  );

  return app;
};
