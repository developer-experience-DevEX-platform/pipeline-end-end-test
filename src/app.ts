import express from 'express';

import { healthRouter } from './routes/health.js';

export const createApp = () => {
  const app = express();

  // Keep framework implementation details out of HTTP responses.
  app.disable('x-powered-by');
  app.use(express.json());
  app.use('/health', healthRouter);

  return app;
};
