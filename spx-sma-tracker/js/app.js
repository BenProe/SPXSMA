// This file serves as the main entry point for the application. It initializes the app, sets up event listeners, and coordinates the fetching of data, calculations, and chart rendering.

document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chart');
    const tableContainer = document.getElementById('data-table');
    
    // Initialize the application
    function init() {
        fetchData();
    }

    // Fetch S&P 500 data
    async function fetchData() {
        try {
            const data = await fetchS&P500Data();
            const smaData = calculateSMA(data, 200);
            renderChart(data, smaData);
            renderTable(data, smaData);
            checkAlerts(data, smaData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Render the chart
    function renderChart(data, smaData) {
        // Call the chart rendering function from chart.js
        createChart(chartContainer, data, smaData);
    }

    // Render the data table
    function renderTable(data, smaData) {
        // Call the table rendering function from calculations.js
        createTable(tableContainer, data, smaData);
    }

    // Check for buy/sell alerts
    function checkAlerts(data, smaData) {
        // Call the alert checking function from calculations.js
        generateAlerts(data, smaData);
    }

    // Start the application
    init();
});