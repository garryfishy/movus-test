'use strict';
const { hashPassword } = require('../services/BcryptServices');
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    let dataUser = [
      {
        name: 'superadmin',
        email: 'superadmin@mail.com',
        phone: '1235667',
        address: 'Jalan jalan ke bogor',
        long: '192.123.3412.54',
        lat: '192.123.333.232',
        doc: 'www.facebook.com',
        kids: '3',
        incomeStatement: 'www.facebook.com',
        married: true,
        password: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    let dataSurvey = [
      {
        userId: 1,
        date: today,
        document: 'www.imagekit.io',
        assesment: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        date: tomorrow,
        document: 'www.imagekit.io',
        assesment: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', dataUser, {});
    await queryInterface.bulkInsert('surveys', dataSurvey, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
