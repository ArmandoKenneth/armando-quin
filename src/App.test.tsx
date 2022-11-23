import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page with filters', () => {
  render(<App />);
  const launchLabel = screen.getByText(/Launch Period/i);
  expect(launchLabel).toBeInTheDocument();
});


describe('Selection', () => {
  test('renders the launch selection section (empty)', () => {
    render(<App />);
    const selectionCardTitle = screen.getByText(/Select a launch in the map/i);
    expect(selectionCardTitle).toBeInTheDocument();
  });
})

