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
                    data: spxData.map(data => data.value),
                    borderColor: 'blue',
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 1,
                },
                {
                    label: 'SMA 200',
                    data: smaData,
                    borderColor: 'red',
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 1,
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
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
                zoom: {
                    limits: {
                        y: {min: 'original', max: 'original'}
                    },
                    pan: {
                        enabled: true,
                        mode: 'xy'
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
                            borderColor: 'rgb(54, 162, 235)',
                            borderWidth: 1,
                            backgroundColor: 'rgba(54, 162, 235, 0.3)'
                        }
                    }
                }
            }
        }
    });
}