const USERROUTE = require("../../services/users");
const { logger } = require("../../configs/winston");

const getAllUsersController = async (req, res) => {
  /**
    #swagger.tags = ['Users']
    #swagger.description = 'Get All Users from DB'
   */
  try {
    const users = await USERROUTE.getAllUsers();
    if (!users) {
      logger.error(`getAllUsersController(): There is no users data. `);
      return;
    }
    res.send({ users });
  } catch (error) {
    logger.error("getAllUsersController() has error" + error);
    return;
  } finally {
    console.log("getAllUsersController() is called anyways");
  }
};

const addUser = async (req, res) => {
  /**
    #swagger.tags = ['Users']
    #swagger.description = 'Add one User to DB'
    #swagger.parameters[''] = {
                    in: 'body',
                    schema: {
                        email: 'kevin@email.com',
                        name: 'Kevin',
                        age: 32
                    }
    } 
    #swagger.responses[201] = {
                description: 'If Success',
                schema: {
                    message: 'Success!.'
                }
    } 
    #swagger.responses[400] = {
                description: 'If one of payload is empty',
                schema: {
                    message: "There is no payload on addUser() in user repository. "
                }
    } 
   */
  try {
    const msg = await USERROUTE.addUser(req.body);
    if (!msg) {
      logger.error(`addUser(): There is no msg data. `);
      return;
    }
    res.send({ msg });
  } catch (error) {
    logger.error("addUser() has error" + error);
    return;
  }
};

module.exports = { getAllUsersController, addUser };
