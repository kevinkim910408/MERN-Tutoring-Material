const USERDB = require("../../repositories/users");
const { logger } = require("../../configs/winston");
const jwt = require("jsonwebtoken");
const { CustomException, getStatusCode } = require("../../configs/exceptions");

const getAllUsers = async () => {
  const users = await USERDB.getAllUsers();
  return users;
};

const register = async (body) => {
  const msg = await USERDB.register(body);
  return msg;
};

const login = async (body) => {
  try {
    const msg = await USERDB.login(body);

    const payload = { msg: "THANK YOU" };
    const jwtSecret = process.env.JWT_SECRET || "SECRET_KEY_FOR_JWT";

    const accessToken = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });

    console.log(accessToken);
    return msg;
  } catch (error) {
    logger.error("login() service: Creating JWT Error.", error);
    throw CustomException(getStatusCode.SERVER_ERROR);
  }
};

module.exports = { getAllUsers, register, login };
