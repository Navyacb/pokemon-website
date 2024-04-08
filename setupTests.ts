import matchers from '@testing-library/jest-dom/matchers';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { server } from './util/MocksTest/server';
import { cleanup } from '@testing-library/react';

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
expect.extend(matchers);

beforeAll(() => {
    server.listen();
    // resets scrollIntoView since jsdom may not be updated with latest browser apis
    window.HTMLElement.prototype.scrollIntoView = function () {};
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
    server.resetHandlers();
    cleanup();
  });
  
  // Clean up after the tests are finished.
  afterAll(() => server.close());