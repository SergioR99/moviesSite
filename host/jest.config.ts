import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.jest.json',
        },
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': [
        'ts-jest',
        {
            tsconfig: '<rootDir>/tsconfig.jest.json', 
        },
        ],
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^movieOne/(.*)$': '<rootDir>/__mocks__/movieOne/$1.tsx',
        '^movieTwo/(.*)$': '<rootDir>/__mocks__/movieTwo/$1.tsx',
    },
};

export default config;