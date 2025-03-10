// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock the next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: '',
      route: '',
      asPath: '',
      query: {},
    };
  },
}));

// Mock the process.env variables used in tests
process.env = {
  ...process.env,
  NEXT_PUBLIC_API_URL: 'https://short.url'
}; 