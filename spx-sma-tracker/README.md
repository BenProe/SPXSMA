# SPX SMA Tracker

## Overview
The SPX SMA Tracker is a mobile-friendly web application designed to track the S&P 500 (SPX) index and calculate its 200-day simple moving average (SMA200). The application provides real-time alerts when the SPX crosses the SMA200, along with a graphical chart and a table displaying daily values and corresponding buy or sell signals.

## Features
- **Real-time Tracking**: Monitors the S&P 500 index and updates values dynamically.
- **200-Day SMA Calculation**: Computes the 200-day simple moving average for the SPX.
- **Alerts**: Notifies users when the SPX crosses the SMA200, indicating potential buy or sell opportunities.
- **Interactive Chart**: Visual representation of SPX values and SMA200 over time.
- **Data Table**: Displays daily SPX values along with buy/sell signals based on SMA crossings.

## Project Structure
```
spx-sma-tracker
├── public
│   ├── index.html
│   └── styles.css
├── src
│   ├── components
│   │   ├── Chart.tsx
│   │   ├── Table.tsx
│   │   └── Alerts.tsx
│   ├── services
│   │   └── api.ts
│   ├── utils
│   │   └── calculations.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/spx-sma-tracker.git
   ```
2. Navigate to the project directory:
   ```
   cd spx-sma-tracker
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Deploying on GitHub Pages
To deploy the application on GitHub Pages, follow these steps:
1. Add the homepage field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/spx-sma-tracker"
   ```
2. Build the application:
   ```
   npm run build
   ```
3. Deploy the build folder to GitHub Pages using a tool like `gh-pages`:
   ```
   npm install --save gh-pages
   ```
   Then add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Run the deploy command:
   ```
   npm run deploy
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.