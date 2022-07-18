const { user } = require('../models');

class UserServices {
  static async findUser(email) {
    try {
      let getUser = await user.findOne({ where: { email } });
      return getUser;
    } catch (error) {
      res.send(error);
    }
  }

  static async findUserById(id) {
    try {
      let getUser = await user.findOne({ where: { id } });
      return getUser;
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = UserServices;
