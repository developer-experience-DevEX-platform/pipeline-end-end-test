import { afterEach, describe, expect, test } from '@jest/globals';
import type { Server } from 'node:http';

import { resolveListenAddress, startServer } from '../src/server';

describe('resolveListenAddress', () => {
  const originalPort = process.env.PORT;

  afterEach(() => {
    if (originalPort === undefined) {
      delete process.env.PORT;
    } else {
      process.env.PORT = originalPort;
    }
  });

  test('defaults to port 3000', () => {
    delete process.env.PORT;

    expect(resolveListenAddress()).toEqual({ port: 3000, host: '0.0.0.0' });
  });

  test('uses PORT when set', () => {
    process.env.PORT = '8080';

    expect(resolveListenAddress()).toEqual({ port: 8080, host: '0.0.0.0' });
  });
});

describe('startServer', () => {
  let server: Server | undefined;

  afterEach(async () => {
    if (!server) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      server?.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  });

  test('listens and serves /health', async () => {
    server = startServer(0);

    await new Promise<void>((resolve, reject) => {
      server?.once('listening', resolve);
      server?.once('error', reject);
    });

    const address = server.address();
    if (!address || typeof address === 'string') {
      throw new Error('expected a TCP address');
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/health`);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ status: 'healthy' });
  });
});
