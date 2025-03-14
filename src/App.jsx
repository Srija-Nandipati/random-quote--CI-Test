// src/App.jsx
import React, { useState } from 'react';
import QuoteShare from './components/QuoteShare';
import { QuoteGen } from './components/QuoteGen';
import './App.css'; // Optional styling

function App() {
  const [quoteData, setQuoteData] = useState({
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    url: "https://example.com/quote/123",
  });

  // Callback to update quote data from QuoteGen
  const handleQuoteChange = (newQuote) => {
    setQuoteData(newQuote);
  };

  return (
    <div className="App">
      {/* Pass callback to QuoteGen to update quote data */}
      <QuoteGen onQuoteChange={handleQuoteChange} />
      
      {/* Pass dynamic quote data to QuoteShare */}
      <QuoteShare
        quote={quoteData.quote}
        author={quoteData.author}
        url={quoteData.url}
      />
    </div>
  );
}

export default App;