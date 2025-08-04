import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.json({
    message: "If you can see this, then it is working!",
    status: 200 
  });
});

export default router;
