const { User } = require("../../dtos/user");
const { logger } = require("../../configs/winston");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) {
      logger.error("getAllUsers(): There is no users data. ");
      return;
    }
    return allUsers;
  } catch (error) {
    logger.error("getAllUsers() has error" + error);
    return;
  }
};

const addUser = async (payload) => {
  const { email, name, age, password } = payload;
  try {
    if (!email || !name || !age || !password) {
      logger.error("There is no payload on addUser() in user repository");
      logger.error(
        "Email: " + email,
        "Name: " + name,
        "Age: " + age,
        "Password: " + password
      );
      return "failed, Check Payload";
    }

    const foundUser = await User.findOne({ email });

    if (foundUser) {
      logger.error(`addUser(): ${email} is already exists.`);
      return "failed, Email is dupped";
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const newUser = new User({ email, name, age, password: hashedPassword });

    await newUser.save();

    return "success";
  } catch (error) {
    logger.error("addUser() has error" + error);
    return;
  }
};

const login = async (payload) => {
  const { email, password } = payload;
  try {
    if (!email || !password) {
      logger.error("There is no payload on addUser() in user repository");
      logger.error("Email: " + email, "Password: " + password);
      return "failed, Check Payload";
    }

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      logger.error(`login(): ${email} is not found.`);
      return "failed, not registered user";
    }
    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) {
      logger.error(`login(): Password mismatch for ${email}.`);
      return "failed, incorrect password";
    }

    return "success";
  } catch (error) {
    logger.error("addUser() has error" + error);
    return;
  }
};

module.exports = { getAllUsers, addUser, login };
