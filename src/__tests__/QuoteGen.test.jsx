import { render, screen, fireEvent } from "@testing-library/react";
import { QuoteGen } from "../components/QuoteGen";

const updatedQuotePlaceholder = /updatedQuotePlaceholder/i;

describe("QuoteGenerator Component", () => {
  it("renders a quote initially", () => {
    render(<QuoteGen />);
    expect(screen.getByText(/Quote generator/i)).toBeInTheDocument();
  });

  it("generates a new quote when the button is clicked", () => {
    render(<QuoteGen />);
    const button = screen.getByRole("button", { name: /get new quote/i });

    fireEvent.click(button);

    const updatedQuote = screen.getByText(updatedQuotePlaceholder);
    expect(updatedQuote).toBeInTheDocument();
  });
});
