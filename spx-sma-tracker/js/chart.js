// This file handles the rendering of the graphic chart that displays the S&P 500 values and the 200-day simple moving average (SMA200).

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
                    data: spxData.map(data => data.value),
                    borderColor: 'blue',
                    fill: false,
                },
                {
                    label: 'SMA 200',
                    data: smaData,
                    borderColor: 'red',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: true,
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            }
        }
    });
}