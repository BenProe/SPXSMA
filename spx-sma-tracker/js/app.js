function createChart(container, data, smaData) {
    const ctx = document.getElementById('spxChart').getContext('2d');
    
    const chartData = {
        labels: data.map(d => d.date.toLocaleDateString()),
        datasets: [
            {
                label: 'S&P 500',
                data: data.map(d => d.price),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'SMA200',
                data: smaData.map(d => d?.value),
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'S&P 500 vs SMA200'
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', init);

async function init() {
    try {
        // Fetch data
        const data = await fetchSPXData();
        
        // Calculate SMA200
        const smaData = calculateSMA(data, 200);
        
        // Create chart
        createChart(document.getElementById('spxChart'), data, smaData);
        
        // Update table
        createTable(document.getElementById('data-table'), data, smaData);
        
        // Generate alerts
        generateAlerts(data, smaData);
        
    } catch (error) {
        console.error('Error initializing app:', error);
        document.getElementById('data-body').innerHTML = '<tr><td colspan="4">Error loading data. Please try again later.</td></tr>';
    }
}

// Check for new data every 5 minutes
setInterval(init, 5 * 60 * 1000);