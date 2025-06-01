import express from 'express';
import dotenv from 'dotenv';
import payrollRoutes from './routes/payrolls';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.send({ status: 'UP' });
});

app.use('/api/payrolls', payrollRoutes);

app.listen(port, () => {
  console.log(`PaySurity-Payroll-Core listening on port ${port}`);
});
