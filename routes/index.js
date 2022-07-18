const router = require('express').Router();
const UserController = require('../Controllers/UserController');
const survey = require('./surveys');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/login', UserController.login);

router.use('/survey', survey);

module.exports = router;
