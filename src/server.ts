import { createApp } from './app.js';

export const resolveListenAddress = () => ({
  port: Number(process.env.PORT) || 3000,
  host: '0.0.0.0' as const,
});

export const startServer = (
  port = resolveListenAddress().port,
  host = resolveListenAddress().host,
) => {
  const app = createApp();

  return app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
};

if (process.env.NODE_ENV !== 'test') {
  startServer();
}
