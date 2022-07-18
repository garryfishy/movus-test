const jwt = require('jsonwebtoken');
const { User } = require('../models');
class JWTService {
  static async sign(payload, secretcode) {
    return jwt.sign({ payload }, secretcode);
  }

  static async authentication(req, res, next) {
    const { access_token } = req.headers;
    try {
      if (access_token) {
        const tokenUser = jwt.verify(access_token, process.env.secretcode);
        let result = await User.findByPk(tokenUser.payload.id);
        if (result) {
          req.user = {
            id: result.dataValues.id,
            email: result.dataValues.email,
          };
          if (result) {
            console.log(req.user.id);
            next();
          } else {
            res.status(500).json('Internal Server Error');
          }
        }
      }
    } catch (error) {
      res.status(500).json('Internal Server Error');
    }
  }
}

module.exports = JWTService;
