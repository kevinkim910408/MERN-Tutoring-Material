const express = require("express");
const DBConnect = require("./src/configs/mongo");
const indexRouter = require("./src/routers/index");
const { logger, error } = require("./src/configs/winston");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./src/configs/swagger-output.json");
const cors = require("cors");

const app = express();
DBConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});
