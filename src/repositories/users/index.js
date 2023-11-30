const { User } = require("../../dtos/user");
const { logger } = require("../../configs/winston");

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

const addUser = async ({ email, name, age }) => {
  try {
    if (!email || !name || !age) {
      logger.error("There is no payload on addUser() in user repository");
      logger.error("Email: " + email, "Name: " + name, "Age: " + age);
      return;
    }

    const newUser = new User({ email, name, age });

    if (newUser) {
      logger.error(`addUser(): ${email} is already exists.`);
      return "failed";
    }
    await newUser.save();

    return "success";
  } catch (error) {
    logger.error("addUser() has error" + error);
    return;
  }
};

module.exports = { getAllUsers, addUser };
