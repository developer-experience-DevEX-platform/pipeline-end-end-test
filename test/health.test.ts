import { describe, expect, test } from '@jest/globals';
import request from 'supertest';

import { createApp } from '../src/app';

describe('GET /health', () => {
  test('returns a healthy response', async () => {
    const response = await request(createApp()).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'healthy',
      service: 'pipeline-end-end-test',
    });
    expect(response.headers['x-powered-by']).toBeUndefined();
  });

  test('returns 404 for an unknown route', async () => {
    const response = await request(createApp()).get('/missing');

    expect(response.status).toBe(404);
  });
});
