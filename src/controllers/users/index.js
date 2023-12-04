const USERSERVICE = require("../../services/users");

const getAllUsersController = async (req, res) => {
  /**
    #swagger.tags = ['Users']
    #swagger.description = 'Get All Users from DB'
   */
  const users = await USERSERVICE.getAllUsers();
  res.send(users);
};

const register = async (req, res) => {
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
                    message: "There is no payload on register() in user repository. "
                }
    } 
   */
  const msg = await USERSERVICE.register(req.body);
  res.send(msg);
};

const login = async (req, res) => {
  /**
    #swagger.tags = ['Users']
    #swagger.description = 'Login API'
    #swagger.parameters[''] = {
                    in: 'body',
                    schema: {
                        email: 'kevin@email.com',
                        password: 'password',
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
                    message: "There is no payload on login() in user repository. "
                }
    } 
   */
  const msg = await USERSERVICE.login(req.body);
  res.send(msg);
};

module.exports = { getAllUsersController, register, login };
