// This file is responsible for fetching the S&P 500 data from an external API, processing the data, and making it available for calculations and chart rendering.

const API_URL = 'https://api.example.com/spx'; // Replace with the actual API endpoint

const API_KEY = 'PSWF03BPEQXZP3CG'; // Replace with your Alpha Vantage API key

async function fetchSPXData() {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=${API_KEY}&outputsize=full`);
        const data = await response.json();
        
        // Format the data
        const timeSeries = data['Time Series (Daily)'];
        return Object.entries(timeSeries).map(([date, values]) => ({
            date: new Date(date),
            price: parseFloat(values['4. close'])
        })).reverse(); // Reverse to get chronological order
    } catch (error) {
        console.error('Error fetching SPX data:', error);
        throw error;
    }
}


function processData(data) {
    // Process the data to extract relevant information
    // This function should return an array of SPX values with dates
    return data.map(entry => ({
        date: entry.date,
        value: entry.value
    }));
}

//export { fetchSPXData };