import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (_request, response) => {
  response.json({ status: 'healthy', service: 'pipeline-end-end-test' });
});
