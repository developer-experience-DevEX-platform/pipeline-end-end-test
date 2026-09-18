import { describe, expect, test } from '@jest/globals';
import request from 'supertest';

import { createApp } from '../src/app';

describe('GET /ready', () => {
  test('returns a ready response', async () => {
    const response = await request(createApp()).get('/ready');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ready: true });
  });
});
