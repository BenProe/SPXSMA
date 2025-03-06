// Register the zoom plugin
Chart.register(ChartZoom);

const ctx = document.getElementById('spxChart').getContext('2d');
let spxChart;

function renderChart(spxData, smaData) {
    if (spxChart) {
        spxChart.destroy();
    }

    spxChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'S&P 500',
                    data: spxData.filter(data => data.date && !isNaN(data.price)).map(data => ({
                        x: data.date,
                        y: data.price
                    })),
                    borderColor: 'blue',
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 1,
                },
                {
                    label: 'SMA 200',
                    data: smaData.filter(data => data && data.date && !isNaN(data.value)).map(data => ({
                        x: data.date,
                        y: data.value
                    })),
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
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        displayFormats: {
                            day: 'DD.MM.YYYY'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price'
                    }
                }
            },
            plugins: {
                zoom: {
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
                            backgroundColor: 'rgba(54, 162, 235, 0.3)'
                        }
                    }
                }
            }
        }
    });
}