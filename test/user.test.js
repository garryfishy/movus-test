const request = require('supertest');
const app = require('../app');
const { user } = require('../models');

beforeAll((done) => {
  user
    .create({
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
    })
    .then(() => done())
    .catch((err) => done(err));
});

afterAll((done) => {
  user
    .destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true,
    })
    .then(() => done())
    .catch((err) => done(err));
});

let loginsuccess = {
  email: 'superadmin@mail.com',
  password: 'superadmin',
};

describe('POST /login [has email and password]', () => {
  test('login successful', (done) => {
    request(app)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginsuccess)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        expect(response.body).not.toHaveProperty('password');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
