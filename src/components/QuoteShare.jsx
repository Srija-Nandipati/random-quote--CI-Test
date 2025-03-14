// src/components/QuoteShare.jsx
import React from 'react';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import './QuoteShare.css'; // Optional styling

const QuoteShare = ({ quote, author, url }) => {
  const shareText = `"${quote}" - ${author}`;

  return (
    <div className="quote-share">
      <h3>Share this Quote</h3>
      <div className="share-buttons">
        {/* Twitter Share Button */}
        <TwitterShareButton
          url={url}
          title={shareText}
          hashtags={['quotes', 'inspiration']}
          className="share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        {/* Facebook Share Button */}
        <FacebookShareButton
          url={url}
          quote={shareText}
          hashtag="#quotes"
          className="share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        {/* WhatsApp Share Button */}
        <WhatsappShareButton
          url={url}
          title={shareText}
          separator=" :: "
          className="share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        {/* Instagram doesn't have a direct share API, so we use a URL redirect */}
        <a
          href={`https://www.instagram.com/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button instagram-button"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            width="32"
            height="32"
            style={{ borderRadius: '50%' }}
          />
        </a>
      </div>
    </div>
  );
};

export default QuoteShare;