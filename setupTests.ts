/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
expect.extend(matchers);
