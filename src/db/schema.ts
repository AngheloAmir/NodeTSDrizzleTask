import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id:           serial('id').primaryKey(),
  title:        text('title').default('todo'),
  created_at:   timestamp('created_at').defaultNow().notNull(),
  is_done:      boolean('is_done').default(false).notNull(),
});

export type Todo = typeof todos.$inferSelect;
export type NewTodo = typeof todos.$inferInsert;