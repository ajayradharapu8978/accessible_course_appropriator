import { devConfig } from "../development";
var jwt = require("jsonwebtoken");

export const sendJWTToken = (req, res) => {
  const token = jwt.sign({ id: req.currentUser._id }, devConfig.jwtSecret, {
    expiresIn: "1d",
  });
  res.redirect(`${devConfig.frontendURL}`);
};

export const authenticate = (req, res) => {
  return res.send(true);
};

export const logout = (req, res) => {
  req.logout();
  return res.json({ success: true });
};
