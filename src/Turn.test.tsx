import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Turn from './Turn.jsx';

describe('Turn', () => {
  it('renders with no props as expected', () => {
    const { asFragment } = render(< Turn guess="Angle" referenceWord="Amber" />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('renders the success css class correctly', () => {
    const { queryAllByTestId } = render(< Turn guess="Angle" referenceWord="Amber" />);
    expect(queryAllByTestId("Angle-0")[0].classList.contains('correct')).toBe(true);
  })
});