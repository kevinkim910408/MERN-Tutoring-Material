const USERDB = require("../../repositories/users");
const { logger } = require("../../configs/winston");

const getAllUsers = async () => {
  try {
    const users = await USERDB.getAllUsers();
    if (!users) {
      logger.error("getAllUsers(): There is no users data. ");
      return;
    }
    return users;
  } catch (error) {
    logger.error("getAllUsers() has error" + error);
    return;
  }
};

const addUser = async (body) => {
  try {
    const msg = await USERDB.addUser(body);
    return msg;
  } catch (error) {
    logger.error("addUser() has error" + error);
    return;
  }
};

module.exports = { getAllUsers, addUser };
