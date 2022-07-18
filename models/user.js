'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../services/BcryptServices');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.survey);
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.TEXT,
      long: DataTypes.STRING,
      lat: DataTypes.STRING,
      doc: DataTypes.STRING,
      kids: DataTypes.INTEGER,
      incomeStatement: DataTypes.INTEGER,
      married: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      hooks: {
        async beforeCreate(user, _) {
          user.password = await hashPassword(user.password);
        },
      },
      modelName: 'user',
    }
  );
  return user;
};
