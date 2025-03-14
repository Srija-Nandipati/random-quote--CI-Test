// jest.config.js
module.exports = {
    testEnvironment: 'jsdom', // Use jsdom for DOM testing
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional setup file
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transform JSX/TS files
    },
    testMatch: ['<rootDir>/src/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)'],
  };