import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { expect, test } from 'vitest';
import App from './App';

test('renders the site layout and nested route', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<h1>Page content</h1>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: 'Page content' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/Resume.pdf');
});
