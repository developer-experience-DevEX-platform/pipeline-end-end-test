import { createApp } from './app.js';

export const resolveListenAddress = () => {
  const rawPort = process.env.PORT;
  const port = rawPort === undefined || rawPort === '' ? 3000 : Number(rawPort);

  return { port, host: '0.0.0.0' as const };
};

export const startServer = (
  port = resolveListenAddress().port,
  host = resolveListenAddress().host,
) => {
  const app = createApp();

  return app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
};
