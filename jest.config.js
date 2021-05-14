module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "__testSrc__"
  ],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/core/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@ui/(.*)': '<rootDir>/src/ui/$1',
    '@tests/(.*)': '<rootDir>/__testSrc__/$1',
  }
};
