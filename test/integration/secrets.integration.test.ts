import { describe, expect, test } from '@jest/globals';

describe('AWS Secrets Manager integration', () => {
  test('provides the approved test token', () => {
    const testToken = process.env.TEST_TOKEN;

    expect(testToken).toBeDefined();
    expect(testToken).not.toHaveLength(0);
  });
});
