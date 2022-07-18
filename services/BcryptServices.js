const bcrypt = require('bcryptjs');

class BcryptServices {
  static hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  static checkPassword(hash, password) {
    return bcrypt.compareSync(hash, password);
  }
}

module.exports = BcryptServices;
