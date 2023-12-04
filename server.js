const express = require("express");
const DBConnect = require("./src/configs/mongo");
const indexRouter = require("./src/routers/index");
const { logger } = require("./src/configs/winston");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./src/configs/swagger-output.json");
const { error } = require("winston");

const app = express();
DBConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { explorer: true })
);

app.get("/", (req, res) => {
  /**
    #swagger.tags = ['Welcome']
    #swagger.description = 'This is just a simple welcome Sentence'
   */
  res.json({ message: "Welcome to first node server." });
});

// Error handler middleware for async controller
function asyncErrorHandler(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      return next(e);
    }
  };
}

app.get(
  "/",
  asyncErrorHandler(async (req, res) => {
    throw new Error("Something went wrong!");
  })
);

// Error handler
app.use(function (err, req, res, next) {
  // All errors from async & non-async route above will be handled here
  if (err) {
    // console.log(err)
    return err.message
      ? res.status(err.statusCode || 500).send(err.message)
      : res.sendStatus(500);
  }
  next();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});
