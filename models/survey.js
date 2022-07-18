'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      survey.belongsTo(models.user);
    }
  }
  survey.init(
    {
      userId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      document: DataTypes.STRING,
      assesment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'survey',
    }
  );
  return survey;
};
