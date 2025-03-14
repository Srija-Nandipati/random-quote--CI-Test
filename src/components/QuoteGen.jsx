// src/components/QuoteGen.jsx
import React, { useState, useEffect } from 'react';

export function QuoteGen({ onQuoteChange }) {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      const newQuote = { text: randomQuote.text, author: randomQuote.author || 'Unknown' };
      setQuote(newQuote);
      if (onQuoteChange) onQuoteChange({ quote: newQuote.text, author: newQuote.author, url: window.location.href });
    } catch (error) {
      console.error('Error fetching the quote:', error);
      setQuote({ text: 'Failed to load quote', author: 'Error' }); // Fallback
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-generator">
      <div className="quote-card">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">-{quote.author}</p>
      </div>
      <button className="new-quote-button" onClick={fetchQuote}>
        Get New Quote
      </button>
    </div>
  );
}