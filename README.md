# pipeline-end-end-test

Backstage don't creating inactive services

Owner: group:default/developer-experience

Install: `npm install`

Run in development: `npm run dev`

Unit tests: `npm test`

Integration tests: `npm run test:integration`

Integration tests start their own dependencies with Testcontainers, so Docker
must be running locally. The same command runs in CI. Do not change
`.github/workflows/ci.yml` to add a dependency.

The Postgres sample in `test/integration/postgres.test.ts` is a pattern. Replace
it with tests of this service's own components, or keep it and add more files
next to it. To add S3 or SQS, use LocalStack (`@testcontainers/localstack`).
Jest already runs every file under `test/integration/`.

Smoke, performance, and regression tests against a deployed environment belong
in CD, not here.
