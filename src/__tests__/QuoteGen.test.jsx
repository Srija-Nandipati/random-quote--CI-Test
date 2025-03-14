import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteGen } from '../components/QuoteGen';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { text: 'Test quote', author: 'Test Author' },
      { text: 'Another quote', author: 'Another Author' },
    ]),
  })
);

describe('QuoteGenerator Component', () => {
  it('renders a quote initially', async () => {
    render(<QuoteGen />);
    expect(await screen.findByText(/"Test quote"/)).toBeInTheDocument();
    expect(screen.getByText(/-Test Author/)).toBeInTheDocument();
  });

  it('generates a new quote when the button is clicked', async () => {
    render(<QuoteGen />);
    const button = screen.getByText('Get New Quote');
    fireEvent.click(button);
    expect(await screen.findByText(/"Test quote"/)).toBeInTheDocument();
  });
});