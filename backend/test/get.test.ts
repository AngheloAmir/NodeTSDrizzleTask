import request from 'supertest';
import { Server } from 'http';
import server from '../src/server';

describe('GET /api/v1/todos', () => {
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

  it('should return 200 and an array of todos', async () => {
    const res = await request(app)
      .get('/api/v1/todos')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(Array.isArray(res.body)).toBe(true);

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('id');
      expect(res.body[0]).toHaveProperty('title');
      expect(res.body[0]).toHaveProperty('is_done');
      expect(res.body[0]).toHaveProperty('created_at');
    }
  });
});
