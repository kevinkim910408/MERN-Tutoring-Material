const Router = require("express");
const userRoute = require("./users");

const indexRouter = Router();

// user route
indexRouter.use("/user", userRoute);

module.exports = indexRouter;
