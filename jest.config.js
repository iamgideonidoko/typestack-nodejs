// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePaths: ['./src'],
  moduleNameMapper: pathsToModuleNameMapper({
    '@/*': ['*'],
  }),
  clearMocks: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
