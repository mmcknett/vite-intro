import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('renders with no props as expected', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })
});