const { CustomException, getStatusCode } = require("../configs/exceptions");
const { User } = require("../dtos/user");

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return CustomException(getStatusCode.UNAUTHORIZED);
  }
  try {
    const foundUser = await User.findOne({ token });
    console.log(foundUser);
    if (!foundUser) {
      return CustomException(getStatusCode.NOT_FOUND);
    }
    req.user = foundUser;
    next();
  } catch (error) {
    return CustomException(getStatusCode.SERVER_ERROR);
  }
};

module.exports = verifyToken;
