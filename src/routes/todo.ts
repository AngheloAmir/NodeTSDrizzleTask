// import { Router } from 'express';
// import { db }    from '../db';
// import { todos } from '../db/schema';
// // import { eq } from 'drizzle-orm';

// const router = Router();

// router.get('/', async (_req, res) => {
//   try {
//     const [newTodo] = await db.insert(todos)
//       .values({ 
//         title: `New todo at ${new Date().toISOString()}`,
//         is_done: false,
//         created_at: new Date()
//       })
//       .returning();
    
//     // Get all todos including the new one
//     const allTodos = await db.select()
//       .from(todos)
//       .orderBy(todos.created_at);
    
//     res.json({
//       message: 'New todo added successfully',
//       newTodo,
//       allTodos
//     });
//   } catch (error) {
//     console.error('Error processing request:', error);
//     res.status(500).json({ 
//       error: 'Failed to process request',
//       details: error instanceof Error ? error.message : 'Unknown error'
//     });
//   }
// });

// export default router;


// // GET /todos - Get all todos
// // router.get('/', async (req, res) => {
// //   try {
// //     const allTodos = await db.select().from(todos).orderBy(todos.created_at);
// //     res.json(allTodos);
// //   } catch (error) {
// //     console.error('Error fetching todos:', error);
// //     res.status(500).json({ error: 'Failed to fetch todos' });
// //   }
// // });

// // // POST /todos - Create a new todo
// // router.post('/', async (req, res) => {
// //   const { title } = req.body;

// //   if (!title || typeof title !== 'string') {
// //     return res.status(400).json({ error: 'Title is required and must be a string' });
// //   }

// //   try {
// //     const [newTodo] = await db.insert(todos)
// //       .values({ 
// //         title,
// //         is_done: false,
// //         created_at: new Date()
// //       })
// //       .returning();
    
// //     res.status(201).json(newTodo);
// //   } catch (error) {
// //     console.error('Error creating todo:', error);
// //     res.status(500).json({ error: 'Failed to create todo' });
// //   }
// // });

// // // DELETE /todos/:id - Delete a todo by ID
// // router.delete('/:id', async (req, res) => {
// //   const id = parseInt(req.params.id);
  
// //   if (isNaN(id)) {
// //     return res.status(400).json({ error: 'Invalid todo ID' });
// //   }

// //   try {
// //     const [deletedTodo] = await db.delete(todos)
// //       .where(eq(todos.id, id))
// //       .returning();
    
// //     if (!deletedTodo) {
// //       return res.status(404).json({ error: 'Todo not found' });
// //     }
    
// //     res.json({ message: 'Todo deleted successfully' });
// //   } catch (error) {
// //     console.error('Error deleting todo:', error);
// //     res.status(500).json({ error: 'Failed to delete todo' });
// //   }
// // });

// // export default router;