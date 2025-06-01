import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
  // Placeholder: return mock payroll runs
  res.send([{ id: 1, period: '2025-05', status: 'Completed' }]);
});

router.post('/', async (req, res) => {
  // Placeholder: create a payroll run
  const { period } = req.body;
  res.status(201).send({ id: 2, period, status: 'Scheduled' });
});

export default router;
