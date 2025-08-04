import request from 'supertest';
import { Server } from 'http';
import server from '../src/server';

describe('POST /api/v1/todos', () => {
  let app: Server;

  beforeAll(() => {
    app = server.listen(0);
  });

  afterAll(() => {
    return new Promise((resolve) => {
      app.close(() => resolve(undefined));
    });
  });

  it('should create a new todo and return it', async () => {
    const newTodoTitle = 'Learn Drizzle ORM';

    const res = await request(app)
      .post('/api/v1/todos')
      .send({ title: newTodoTitle })
      .expect('Content-Type', /json/)
      .expect(201);

    const createdTodo = res.body;

    expect(createdTodo).toHaveProperty('id');
    expect(createdTodo).toHaveProperty('title', newTodoTitle);
    expect(createdTodo).toHaveProperty('is_done', false);
    expect(createdTodo).toHaveProperty('created_at');
  });
});
