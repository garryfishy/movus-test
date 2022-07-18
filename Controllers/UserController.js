const UserServices = require('../services/UserServices');
const { sign, authentication } = require('../services/JwtService');
const { checkPassword, hashPassword } = require('../services/BcryptServices');
class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      let findUser = await UserServices.findUser(email);
      if (!findUser) {
        res.status(404).json({ msg: 'User not found' });
      } else {
        const checkHash = checkPassword(password, findUser.dataValues.password);
        if (checkHash) {
          const { id, email, name } = findUser;
          const token = await sign({ id, email, name }, 'inikoderahasia'); // this is not good practice, should use ENV for best practice
          res.status(200).json({ token });
        } else {
          res.status(400).json({ msg: 'Check your email / password' });
        }
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
