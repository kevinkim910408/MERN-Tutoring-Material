const Router = require("express");
const USERCONTROLLER = require("../../controllers/users");

const userRoute = Router();

userRoute.get("/getAllUsers", USERCONTROLLER.getAllUsersController);
userRoute.post("/addUser", USERCONTROLLER.addUser);

module.exports = userRoute;
