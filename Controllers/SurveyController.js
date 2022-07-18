const { survey, user } = require('../models');
const SurveyServices = require('../services/SurveyServices');
const UserServices = require('../services/UserServices');
const { Op } = require('sequelize');
class SurveyController {
  static async getAllSurveys(req, res) {
    try {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      let findToday = await SurveyServices.getTodayData(today, req.params);
      let findTomorrow = await SurveyServices.getTomorrowData(
        tomorrow,
        req.params
      );

      const data = {
        today: findToday.length > 0 ? findToday : 'No Survey',
        tomorrow: findTomorrow.length > 0 ? findTomorrow : 'No Survey',
      };

      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }

  static async postSurvey(req, res) {
    try {
      const { userId } = req.body;

      let findUser = await UserServices.findUserById(userId);
      if (findUser) {
        await user.create(req.body);
        res.status(201).json({ msg: 'Survey Created' });
      } else {
        res.status(404).json({ msg: 'User not found' });
      }
    } catch (error) {
      res.send(error);
    }
  }

  static async getSurveyById(req, res) {
    try {
      const { id } = req.params;
      let findSurvey = await SurveyServices.findSurveyById(id);
      res.status(200).json(findSurvey);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = SurveyController;
