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
    if (!email || !name || !age || !password) {
      logger.error("Payload error on register() in user repository");
      return CustomException(getStatusCode.BAD_REQUEST);
    }

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
    if (!email || !password) {
      logger.error("Payload error on login() in user repository");
      return CustomException(getStatusCode.BAD_REQUEST);
    }

    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      logger.error(`login(): ${email} is not registered user.`);
      return CustomException(getStatusCode.NOT_FOUND);
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
      logger.error(`login(): Password mismatch for ${email}.`);
      return CustomException(getStatusCode.UNAUTHORIZED);
    }
    return CustomException(getStatusCode.OK);
  } catch (error) {
    logger.error("login() has error" + error);
    throw new CustomException(getStatusCode.SERVER_ERROR);
  }
};

module.exports = { getAllUsers, register, login };
