const express = require("express");
const DBConnect = require("./src/configs/mongo");
const indexRouter = require("./src/routers/index");

const app = express();
DBConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to first node server." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
