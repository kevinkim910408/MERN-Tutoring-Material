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
    await USERDB.login(body);

    const payload = { msg: "THANK YOU" };
    const jwtSecret = process.env.JWT_SECRET || "SECRET_KEY_FOR_JWT";

    const accessToken = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });

    const saveTokenPayload = {
      email: body.email,
      token: accessToken,
    };

    const msg = await USERDB.saveToken(saveTokenPayload);

    return { msg, accessToken };
  } catch (error) {
    logger.error("login() service: Creating JWT Error.", error);
    throw CustomException(getStatusCode.SERVER_ERROR);
  }
};

module.exports = { getAllUsers, register, login };
