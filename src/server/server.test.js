const request = require('supertest');
const app = require('./server');

describe('Server', () => {
  it('should return 200 status for GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
