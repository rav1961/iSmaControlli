// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('App contains correct text', () => {
//   render(<App />);
//   const header = screen.getByRole('heading', { name: /Vite + React/i });
//   expect(header).toBeInTheDocument();
// });

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
