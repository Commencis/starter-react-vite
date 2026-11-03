import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

// Vitest 5 no longer reads matchers from `jest.Matchers`, and jest-dom's own
// `vitest` typings still target the v4 `Assertion<T>` signature.
declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- augmentation requires an empty interface
  interface Matchers<
    R extends void | Promise<void> = void | Promise<void>,
    T = unknown,
  > extends TestingLibraryMatchers<T, R> {}
}
