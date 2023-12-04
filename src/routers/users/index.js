const Router = require("express");
const USERCONTROLLER = require("../../controllers/users");

const userRoute = Router();

userRoute.get("/getAllUsers", USERCONTROLLER.getAllUsersController);
userRoute.post("/register", USERCONTROLLER.register);
userRoute.post("/login", USERCONTROLLER.login);

module.exports = userRoute;
