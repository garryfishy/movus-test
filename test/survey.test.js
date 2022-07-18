const request = require('supertest');
const app = require('../app');
const { survey } = require('../models');

describe('Get /survey', () => {
  test('Get All survey', (done) => {
    request(app)
      .get('/survey/5/10')
      .set('Accept', 'application/json')
      .then((response) => {
        console.log(response.body, 'ini body response');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('today');
        expect(response.body).toHaveProperty('tomorrow');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
