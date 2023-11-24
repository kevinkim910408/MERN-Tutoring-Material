const { User } = require("../../dtos/user");

const getAllUsers = async () => {
  const allUsers = await User.find({});
  return allUsers;
};

const addUser = async ({ email, name, age }) => {
  console.log(email, name, age);
  const newUser = new User({ email, name, age });
  await newUser.save();
};

module.exports = { getAllUsers, addUser };
