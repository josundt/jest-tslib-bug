## Repro jest/jest-environment-dom 29.5.0 bug with tslib 2.5.2 ##

This repository contains a minimal sample project to reproduce the jest bug with tslib 2.5.2 when using jsdom.

The bug is reported to Jest in [Github issue 14173](https://github.com/jestjs/jest/issues/14173).

To trigger and review the bug, simply run `npm test`

**Remarks:** 
* If you downgrade the `tslib` dependency from `2.5.2` to `2.5.0`, the problem disappears.
* If you remove the `testEnvironment` property in `jest.config.js`, the problem disappears.