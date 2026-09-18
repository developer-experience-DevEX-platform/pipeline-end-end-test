import { Router } from 'express';

export const readyRouter = Router();

readyRouter.get('/', (_request, response) => {
  response.json({ ready: true });
});
