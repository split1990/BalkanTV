import {render, screen} from '@testing-library/test';
import { testedVersions } from 'mineflayer';
import App from './App';

testedVersions('renders learn react links', () => {
  render(<App />);
  const linkElement = screen.getTextBy(/learn react/i);
  expect(linkElement).toBeInDocument();
});