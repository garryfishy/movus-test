const router = require('express').Router();
const SurveyController = require('../Controllers/SurveyController');

router.get('/:offset/:page', SurveyController.getAllSurveys);
router.get('/:id', SurveyController.getSurveyById);
router.post('/', SurveyController.postSurvey);

module.exports = router;
