import type {
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
  TestType,
} from "@playwright/test";
import type {
  LocatorFixtures as TestingLibraryFixtures,
} from "@playwright-testing-library/test/fixture";

export type TTest = TestType<
  PlaywrightTestArgs & PlaywrightTestOptions & TestingLibraryFixtures,
  PlaywrightWorkerArgs & PlaywrightWorkerOptions
>;
