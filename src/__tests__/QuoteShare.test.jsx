import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteShare from '../components/QuoteShare';

jest.mock('react-share', () => ({
  TwitterShareButton: ({ children, url, title, hashtags }) => (
    <button
      data-testid="twitter-share"
      data-url={url}
      data-title={title}
      data-hashtags={hashtags.join(',')}
    >
      {children}
    </button>
  ),
  TwitterIcon: () => <span data-testid="twitter-icon" />,
  FacebookShareButton: ({ children, url, quote, hashtag }) => (
    <button
      data-testid="facebook-share"
      data-url={url}
      data-quote={quote}
      data-hashtag={hashtag}
    >
      {children}
    </button>
  ),
  FacebookIcon: () => <span data-testid="facebook-icon" />,
  WhatsappShareButton: ({ children, url, title, separator }) => (
    <button
      data-testid="whatsapp-share"
      data-url={url}
      data-title={title}
      data-separator={separator}
    >
      {children}
    </button>
  ),
  WhatsappIcon: () => <span data-testid="whatsapp-icon" />,
}));

describe('QuoteShare Component', () => {
  const defaultProps = {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    url: 'https://example.com/quote/123',
  };

  it('renders share buttons with correct props', () => {
    render(<QuoteShare {...defaultProps} />);
    expect(screen.getByTestId('twitter-share')).toBeInTheDocument();
    expect(screen.getByTestId('facebook-share')).toBeInTheDocument();
    expect(screen.getByTestId('whatsapp-share')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
  });

  it('displays the share heading', () => {
    render(<QuoteShare {...defaultProps} />);
    expect(screen.getByText('Share this Quote')).toBeInTheDocument();
  });
});