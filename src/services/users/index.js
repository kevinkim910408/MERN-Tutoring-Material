const USERDB = require("../../repositories/users");

const getAllUsers = async () => {
  const users = await USERDB.getAllUsers();
  return users;
};

const register = async (body) => {
  const msg = await USERDB.register(body);
  return msg;
};

const login = async (body) => {
  const msg = await USERDB.login(body);
  return msg;
};

module.exports = { getAllUsers, register, login };
