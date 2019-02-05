const request = require('supertest');
const app = require('../main-mock');

describe('GET /blacklist', () => {
  test('should respond with 400 if countMinimum undefined', async (done) => {
    const res = await request(app).get('/blacklist?maxAgeInDays=5&confidenceMinimum=5');
    expect(res.statusCode).toBe(400);
    done();
  });

  test('should respond with 400 if maxAgeInDays undefined', async (done) => {
    const res = await request(app).get('/blacklist?countMinimum=5&confidenceMinimum=5');
    expect(res.statusCode).toBe(400);
    done();
  });

  test('should respond with 400 if confidenceMinimum undefined', async (done) => {
    const res = await request(app).get('/blacklist?countMinimum=5&maxAgeInDays=5');
    expect(res.statusCode).toBe(400);
    done();
  });

  test('should respond with 200 if all query params defined', async (done) => {
    const res = await request(app).get('/blacklist?countMinimum=5&maxAgeInDays=5&confidenceMinimum=5');
    expect(res.statusCode).toBe(200);
    done();
  });
});

describe('GET /check', () => {
  test('should respond with 400 if ipAddress undefined', async (done) => {
    const res = await request(app).get('/check');
    expect(res.statusCode).toBe(400);
    done();
  });

  test('should respond with 200 if all query params defined', async (done) => {
    const res = await request(app).get('/check?ipAddress=0.0.0.0');
    expect(res.statusCode).toBe(200);
    done();
  });
});
