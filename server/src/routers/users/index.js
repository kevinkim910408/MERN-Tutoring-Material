const Router = require("express");
const USERCONTROLLER = require("../../controllers/users");
const verifyToken = require("../../utils/middleware");

const userRoute = Router();

userRoute.get(
  "/getAllUsers",
  verifyToken,
  USERCONTROLLER.getAllUsersController
);
userRoute.post("/register", USERCONTROLLER.register);
userRoute.post("/login", USERCONTROLLER.login);

module.exports = userRoute;
