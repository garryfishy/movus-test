'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.TEXT,
      },
      long: {
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.STRING,
      },
      doc: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      kids: {
        type: Sequelize.INTEGER,
      },
      incomeStatement: {
        type: Sequelize.STRING,
      },
      married: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
