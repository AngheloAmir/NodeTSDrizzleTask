import { Router } from 'express';
import { db }     from '../db';
import { todos }  from '../db/schema';
import { eq }     from 'drizzle-orm';

const router = Router();

//=============================================================================
router.get('/', async (_req, res) => {
  try {
    const allTodos = await db.select().from(todos).orderBy(todos.created_at);
    res.json(allTodos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

//=============================================================================
router.post('/', async (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string') {
     return res.status(400).json({ error: 'Title is required and must be a string' });
  }

  try {
    const [newTodo] = await db.insert(todos)
      .values({ 
        title,
        is_done: false,
        created_at: new Date()
      })
      .returning();
    
    return res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    return res.status(500).json({ error: 'Failed to create todo' });
  }
});

//==================================================================
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid todo ID' });
  }

  try {
    const [deletedTodo] = await db.delete(todos)
      .where(eq(todos.id, id))
      .returning();
    
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    return res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    return res.status(500).json({ error: 'Failed to delete todo' });
  }
});

export default router;

