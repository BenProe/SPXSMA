const TIINGO_API_KEY = '996db4ba59e5cb88df95d4c5a54f2ee15caff887';

async function fetchSPXData() {
    try {
        const symbol = 'SPY';  // SPY ETF tracks S&P 500
        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 5); // Get 5 years of data
        
        const response = await fetch(
            `https://api.tiingo.com/tiingo/daily/${symbol}/prices?startDate=${startDate.toISOString().split('T')[0]}`, 
            {
                headers: {
                    'Authorization': `Token ${TIINGO_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const data = await response.json();
        
        // Debug log to see what we're getting
        console.log('API Response:', data.slice(0, 5));

        if (!Array.isArray(data)) {
            throw new Error('Invalid API response format');
        }

        // Format the data
        const formattedData = data.map(item => ({
            date: new Date(item.date),
            price: item.adjClose
        })).filter(item => item.date && !isNaN(item.price));

        // Debug log for formatted data
        console.log('Formatted Data:', formattedData.slice(0, 5));

        return formattedData;
    } catch (error) {
        console.error('Error fetching SPX data:', {
            message: error.message,
            stack: error.stack,
            type: error.constructor.name
        });
        throw error;
    }
}