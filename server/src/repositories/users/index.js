const { User } = require("../../dtos/user");
const { logger } = require("../../configs/winston");
const { CustomException, getStatusCode } = require("../../configs/exceptions");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) {
      logger.error("getAllUsers(): There is no users data. ");
      return [];
    }
    return allUsers;
  } catch (error) {
    logger.error("getAllUsers() has error" + error);
    throw new CustomException(getStatusCode.SERVER_ERROR);
  }
};

const register = async (payload) => {
  const { email, name, age, password } = payload;
  try {
    const requiredFields = ["email", "name", "age", "password"];
    validatePayload(payload, requiredFields);

    const foundUser = await User.findOne({ email });

    if (foundUser) {
      logger.error(`register(): ${email} is already exists.`);
      return CustomException(getStatusCode.DUPLICATE_ID);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, name, age, password: hashedPassword });
    await newUser.save();

    return CustomException(getStatusCode.CREATED);
  } catch (error) {
    logger.error("register() has error" + error);
    throw new CustomException(getStatusCode.SERVER_ERROR);
  }
};

const login = async (payload) => {
  const { email, password } = payload;
  try {
    const requiredFields = ["email", "password"];
    validatePayload(payload, requiredFields);

    const foundUser = await findUserByEmail(email);

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) {
      logger.error(`login(): Password mismatch for ${email}.`);
      throw new CustomException(getStatusCode.UNAUTHORIZED);
    }
    return CustomException(getStatusCode.OK);
  } catch (error) {
    logger.error("login() has error" + error);
    throw new CustomException(getStatusCode.SERVER_ERROR);
  }
};

const saveToken = async (payload) => {
  const { email, token } = payload;

  try {
    const requiredFields = ["email", "token"];
    validatePayload(payload, requiredFields);

    await User.findOneAndUpdate(
      { email: email },
      { $set: { token } },
      { new: true }
    );
    return CustomException(getStatusCode.OK);
  } catch (error) {
    logger.error("saveToken() has error" + error);
    throw new CustomException(getStatusCode.SERVER_ERROR);
  }
};

// internel uses
const validatePayload = (payload, requiredFields) => {
  for (const field of requiredFields) {
    if (!payload[field]) {
      logger.error(`Payload error: ${field} is missing.`);
      throw new CustomException(getStatusCode.BAD_REQUEST);
    }
  }
};

const findUserByEmail = async (email) => {
  const foundUser = await User.findOne({ email });
  if (!foundUser) {
    logger.error(`User not found for email: ${email}`);
    throw new CustomException(getStatusCode.NOT_FOUND);
  }
  return foundUser;
};

module.exports = { getAllUsers, register, login, saveToken };
