// export function QuoteGen() {
//   return <div>Quote Generator</div>;
// }

import React, { useState, useEffect } from 'react';

export function QuoteGen() {
  // State for quote and author
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const quotes = await response.json();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author || 'Unknown');
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  // Fetch a quote on component mount
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-generator">
      <div className="quote-card">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
      </div>
      <button onClick={fetchQuote} className="new-quote-button">
        Get New Quote
      </button>
    </div>
  );
}
