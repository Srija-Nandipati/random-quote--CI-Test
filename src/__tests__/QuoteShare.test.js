// src/components/__tests__/QuoteShare.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteShare from '../QuoteShare';

// Mock react-share components
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

    // Check Twitter button
    const twitterButton = screen.getByTestId('twitter-share');
    expect(twitterButton).toBeInTheDocument();
    expect(twitterButton).toHaveAttribute('data-url', defaultProps.url);
    expect(twitterButton).toHaveAttribute(
      'data-title',
      `"${defaultProps.quote}" - ${defaultProps.author}`
    );
    expect(twitterButton).toHaveAttribute('data-hashtags', 'quotes,inspiration');
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();

    // Check Facebook button
    const facebookButton = screen.getByTestId('facebook-share');
    expect(facebookButton).toBeInTheDocument();
    expect(facebookButton).toHaveAttribute('data-url', defaultProps.url);
    expect(facebookButton).toHaveAttribute(
      'data-quote',
      `"${defaultProps.quote}" - ${defaultProps.author}`
    );
    expect(facebookButton).toHaveAttribute('data-hashtag', '#quotes');
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();

    // Check WhatsApp button
    const whatsappButton = screen.getByTestId('whatsapp-share');
    expect(whatsappButton).toBeInTheDocument();
    expect(whatsappButton).toHaveAttribute('data-url', defaultProps.url);
    expect(whatsappButton).toHaveAttribute(
      'data-title',
      `"${defaultProps.quote}" - ${defaultProps.author}`
    );
    expect(whatsappButton).toHaveAttribute('data-separator', ' :: ');
    expect(screen.getByTestId('whatsapp-icon')).toBeInTheDocument();

    // Check Instagram link
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      'href',
      `https://www.instagram.com/?url=${encodeURIComponent(defaultProps.url)}`
    );
  });

  it('displays the share heading', () => {
    render(<QuoteShare {...defaultProps} />);
    expect(screen.getByText('Share this Quote')).toBeInTheDocument();
  });
});