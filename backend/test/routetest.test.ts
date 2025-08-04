import request from 'supertest';
import { Server } from 'http';
import server from '../src/server';

describe('Test Endpoint', () => {
  let app: Server;

  beforeAll(() => {
    app = server.listen(0);
  });

  afterAll(() => {
    return new Promise((resolve) => {
      app.close(() => {
        resolve(undefined);
      });
    });
  });

  it('should return 200 and the test message', async () => {
    const response = await request(app)
      .get('/api/v1/test')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({
      message: "If you can see this, then it is working!",
      status: 200
    });
  });
});

