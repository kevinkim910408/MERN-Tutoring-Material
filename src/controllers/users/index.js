const USERROUTE = require("../../services/users");

const getAllUsersController = async (req, res) => {
  const users = await USERROUTE.getAllUsers();
  res.send({ users });
};

const addUser = async (req, res) => {
  const msg = await USERROUTE.addUser(req.body);
  res.send({ msg });
};

module.exports = { getAllUsersController, addUser };
