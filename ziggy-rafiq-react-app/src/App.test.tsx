import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(    <App message="Hello, from Ziggy Rafiq!" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
