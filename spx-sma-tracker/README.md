# SPX SMA Tracker

This project is a simple mobile-friendly web application that tracks the S&P 500 (SPX) and calculates the 200-day simple moving average (SMA200). The application provides alerts when the SMA and SPX cross, displays a graphic chart, and includes a table with daily values and buy/sell signals.

## Project Structure

```
spx-sma-tracker
├── index.html        # Main HTML document
├── css
│   └── styles.css    # Styles for the web application
├── js
│   ├── chart.js      # Handles rendering of the graphic chart
│   ├── calculations.js # Contains functions for SMA200 calculations
│   ├── api.js        # Fetches S&P 500 data from an external API
│   └── app.js        # Main entry point for the application
└── README.md         # Project documentation
```

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spx-sma-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd spx-sma-tracker
   ```

3. Open `index.html` in your web browser.

## Deployment on GitHub Pages

To deploy this application on GitHub Pages, follow these steps:

1. Push your code to a GitHub repository.
2. Go to the repository settings.
3. Scroll down to the "GitHub Pages" section.
4. Select the branch you want to deploy (usually `main` or `master`).
5. Click "Save" and your site will be published at `https://yourusername.github.io/spx-sma-tracker`.

## Features

- Tracks the S&P 500 (SPX) values.
- Calculates the 200-day simple moving average (SMA200).
- Provides buy/sell signals based on SMA and SPX crossovers.
- Displays a graphic chart of SPX and SMA200.
- Shows a table with daily values and signals.

## Acknowledgments

- [S&P 500 Data API](https://example.com) - For providing the S&P 500 data.
- Charting libraries used for rendering the graphic chart.