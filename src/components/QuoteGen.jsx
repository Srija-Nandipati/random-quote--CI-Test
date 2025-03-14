import { useEffect, useState } from "react";
import { categories, quotes } from "../consts/quotes";
import { Social } from "./Social";

export function QuoteGen() {
  const [displayQuote, setDisplayQuote] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  function getRandomQuote(category) {
    const filteredQuotes = category
      ? quotes.filter(
          (quote) => quote.category.toLowerCase() === category.toLowerCase()
        )
      : quotes;

    if (filteredQuotes.length === 0) {
      return { error: "No quotes found for the specified category." };
    }

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    setDisplayQuote(filteredQuotes[randomIndex]);
  }

  useEffect(() => {
    if (!displayQuote) getRandomQuote(selectedCategory);
  }, [displayQuote]);

  useEffect(() => {
    if (selectedCategory) getRandomQuote(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex-col w-100">
      <div className="flex-row">
        {categories?.map((item) => (
          <button
            onClick={() =>
              selectedCategory === item?.category
                ? setSelectedCategory()
                : setSelectedCategory(item?.category)
            }
            className={
              selectedCategory === item?.category
                ? "cat-btn-selected"
                : "cat-btn"
            }
            key={item?.id}
          >
            {item?.category}
          </button>
        ))}
      </div>
      <div className="spacer" />
      <p className="font-niconne text-64">"{displayQuote?.quote}"</p>
      <p className="font-niconne text-24">-{displayQuote?.author}</p>
      <button
        onClick={() => getRandomQuote(selectedCategory)}
        className="new-quote-button"
      >
        Get Another
      </button>
      <div className="spacer" />
      <Social quote={`${displayQuote?.title} - ${displayQuote?.author}`} />
    </div>
  );
}
