const { survey, user } = require('../models');
const { Op } = require('sequelize');

class SurveyServices {
  static async getTodayData(date, params) {
    try {
      const { offset, limit } = params;
      return await survey.findAll({
        include: [{ model: user, attributes: ['name'] }],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        offset,
        limit,

        where: {
          date: {
            [Op.gt]: date.setUTCHours(0, 0, 0, 0),
            [Op.lt]: date.setUTCHours(23, 59, 59, 9999),
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async getTomorrowData(date, params) {
    try {
      const { offset, limit } = params;
      return await survey.findAll({
        include: [{ model: user, attributes: ['name'] }],
        attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
        where: {
          date: {
            [Op.gt]: date.setUTCHours(0, 0, 0, 0),
            [Op.lt]: date.setUTCHours(23, 59, 59, 9999),
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async findSurveyById(id) {
    try {
      return await survey.findAll({
        offset,
        limit,
        include: [
          {
            model: user,
            attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
          },
        ],
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SurveyServices;
