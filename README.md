# PaySurity-Payroll-Core

Core payroll service for PaySurity. Handles employee salary calculations, payroll processing, and scheduling.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/paysurity
   PORT=5000
   ```

3. Run in development:
   ```
   npm run dev
   ```

4. Build & Run in production:
   ```
   npm run build
   npm start
   ```

## Endpoints

- `GET /api/health` - Health check.
- `GET /api/payrolls` - List payroll runs.
- `POST /api/payrolls` - Create a new payroll run.
