const USERDB = require("../../repositories/users");

const getAllUsers = async () => {
  const users = await USERDB.getAllUsers();
  return users;
};

const addUser = async (body) => {
  await USERDB.addUser(body);
  return "success";
};

module.exports = { getAllUsers, addUser };
