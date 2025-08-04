import request from 'supertest';
import { Server } from 'http';
import server from '../src/server';

describe('DELETE /api/v1/todos/:id', () => {
  let app: Server;

  beforeAll(() => {
    app = server.listen(0);
  });

  afterAll(() => {
    return new Promise((resolve) => {
      app.close(() => resolve(undefined));
    });
  });

  it('should create and then delete a todo by ID', async () => {
    const createRes = await request(app)
      .post('/api/v1/todos')
      .send({ title: 'Todo to delete' })
      .expect(201);

    const createdTodo = createRes.body;
    expect(createdTodo).toHaveProperty('id');

    const todoId    = createdTodo.id;
    const deleteRes = await request(app)
      .delete(`/api/v1/todos/${todoId}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(deleteRes.body).toEqual({ message: 'Todo deleted successfully' });

    await request(app)
      .delete(`/api/v1/todos/${todoId}`)
      .expect(404);
  });
});
