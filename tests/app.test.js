const request = require('supertest');
const { app, server } = require('../src/app');

describe('Hello World API', () => {
  afterAll((done) => {
    server.close(done);
  });

  test('GET / should return Hello World message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });
});
