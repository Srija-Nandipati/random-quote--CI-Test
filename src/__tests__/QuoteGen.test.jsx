import { render, screen, fireEvent } from "@testing-library/react";
import { QuoteGen } from "../components/QuoteGen";
import { quotes } from "../consts/quotes";

describe("QuoteGen Component", () => {
  it("renders a quote from the selected category", () => {
    render(<QuoteGen />);

    const motivationButton = screen.getByRole("button", {
      name: /Motivation/i,
    });
    fireEvent.click(motivationButton);

    const displayedQuote = screen.getByText(/"/);
    expect(displayedQuote).toBeInTheDocument();

    const filteredQuotes = quotes.filter((q) => q.category === "Motivation");
    const displayedQuoteText = displayedQuote.textContent
      .replace(/"/g, "")
      .trim();

    const isQuoteFromCorrectCategory = filteredQuotes.some(
      (q) => q.quote === displayedQuoteText
    );

    expect(isQuoteFromCorrectCategory).toBe(true);
  });

  it("fetches a new random quote when 'Get Another' is clicked", () => {
    render(<QuoteGen />);

    const firstQuote = screen.getByText(/"/).textContent;
    const getAnotherButton = screen.getByRole("button", {
      name: /Get Another/i,
    });

    fireEvent.click(getAnotherButton);
    const secondQuote = screen.getByText(/"/).textContent;

    expect(firstQuote).not.toEqual(secondQuote);
  });
});
