// Register the zoom plugin
Chart.register(window.ChartZoom);

const ctx = document.getElementById('spxChart').getContext('2d');
let spxChart;

function renderChart(spxData, smaData) {
    if (spxChart) {
        spxChart.destroy();
    }

    spxChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: spxData.map(data => data.date),
            datasets: [
                {
                    label: 'S&P 500',
                    data: spxData.map(data => data.price), // Changed from value to price
                    borderColor: 'blue',
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 1,
                },
                {
                    label: 'SMA 200',
                    data: smaData.map(data => data?.value), // Added map function
                    borderColor: 'red',
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 1,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        displayFormats: {
                            day: 'dd.MM.yyyy'
                        }
                    }
                },
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'xy',
                        modifierKey: 'ctrl',
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy',
                        drag: {
                            enabled: true,
                            backgroundColor: 'rgba(54, 162, 235, 0.3)'
                        }
                    }
                }
            }
        }
    });
}