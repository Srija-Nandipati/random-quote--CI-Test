import React, { useState, useEffect } from 'react';

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  // Mock API request to fetch Quote of the Day
  const fetchQuoteOfTheDay = async () => {
    // Simulating an API request with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: "The only limit to our realization of tomorrow is our doubts of today.",
          author: "Franklin D. Roosevelt",
        });
      }, 1000); // Simulating 1-second delay
    });
  };

  useEffect(() => {
    async function getQuote() {
      try {
        const response = await fetchQuoteOfTheDay();
        setQuote(response);
      } catch (error) {
        setError('Failed to load quote of the day');
      }
    }

    getQuote();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!quote) {
    return <p>Loading...</p>;
  }

  return (
    <div className="quote-of-the-day">
      <blockquote>{quote.text}</blockquote>
      <cite>— {quote.author}</cite>
    </div>
  );
};

export default QuoteOfTheDay;
