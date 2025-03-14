// src/App.jsx
import React, { useState } from 'react';
import QuoteShare from './components/QuoteShare';
import { QuoteGen } from './components/QuoteGen';
import './App.css';

function App() {
  const [quoteData, setQuoteData] = useState({
    quote: '',
    author: '',
    url: window.location.href,
  });

  const handleQuoteChange = (newQuote) => {
    setQuoteData(newQuote);
  };

  return (
    <div className="App">
      <QuoteGen onQuoteChange={handleQuoteChange} />
      <QuoteShare
        quote={quoteData.quote}
        author={quoteData.author}
        url={quoteData.url}
      />
    </div>
  );
}

export default App;