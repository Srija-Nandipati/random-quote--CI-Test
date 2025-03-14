# Quote Generator Project

A simple and customizable quote generator application that fetches and displays random quotes, allowing users to refresh for a new quote. The project includes features like saving favorite quotes and sorting based on user preferences.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Testing](#testing)
6. [License](#license)

## Features
- Fetches random quotes from an API.
- Allows users to sort/filter quotes based on user preferences.
- Users can save their favorite quotes.
- Responsive design that works on mobile and desktop devices.
- Built-in functionality for testing the UI and quote management.
- Randomizer to shuffle quotes automatically.

## Installation

### Prerequisites
- Node.js (version 14.x or higher)
- Yarn package manager (or npm)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quote-generator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd quote-generator
    ```

3. Install dependencies:
    ```bash
    yarn install
    ```
    or
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    yarn dev
    ```
    or
    ```bash
    npm run dev
    ```

## Usage
- The application displays a random quote when loaded. Click the **"Get New Quote"** button to load a new random quote.
- Saved quotes are stored in local storage or user accounts (if enabled).
- The app also supports filtering and sorting quotes by author or category.

### Configuration
- The project uses a `.env` file for managing environment variables such as API keys (if needed).

## Testing
This project includes a suite of tests to ensure the functionality of the quote generator, including unit tests and integration tests for API calls and UI components.

To run tests:
```bash
yarn test
