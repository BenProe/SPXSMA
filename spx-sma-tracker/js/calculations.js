function calculateSMA(data, period) {
    return data.map((_, index) => {
        if (index < period - 1) return null;
        
        const sum = data.slice(index - period + 1, index + 1)
            .reduce((acc, val) => acc + val.price, 0);
        return {
            date: data[index].date,
            value: sum / period
        };
    });
}

function createTable(container, data, smaData) {
    const tbody = document.getElementById('data-body');
    tbody.innerHTML = '';

    // Show only the last 30 days
    const recentData = data.slice(-30);
    const recentSMA = smaData.slice(-30);

    recentData.forEach((item, index) => {
        const row = document.createElement('tr');
        const signal = getSignal(item.price, recentSMA[index]?.value);
        
        row.innerHTML = `
            <td>${item.date.toLocaleDateString()}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${recentSMA[index]?.value?.toFixed(2) || 'N/A'}</td>
            <td class="${signal.toLowerCase()}">${signal}</td>
        `;
        tbody.appendChild(row);
    });
}

function getSignal(price, sma) {
    if (!sma) return 'N/A';
    return price > sma ? 'BUY' : 'SELL';
}

function generateAlerts(data, smaData) {
    const alertContainer = document.getElementById('alert-messages');
    const lastPrice = data[data.length - 1].price;
    const lastSMA = smaData[smaData.length - 1].value;
    const prevPrice = data[data.length - 2].price;
    const prevSMA = smaData[smaData.length - 2].value;

    // Check for crossover
    if ((prevPrice <= prevSMA && lastPrice > lastSMA) || 
        (prevPrice >= prevSMA && lastPrice < lastSMA)) {
        const signal = lastPrice > lastSMA ? 'BUY' : 'SELL';
        const alert = document.createElement('div');
        alert.className = `alert ${signal.toLowerCase()}`;
        alert.textContent = `${signal} Signal: SPX crossed ${signal === 'BUY' ? 'above' : 'below'} SMA200`;
        alertContainer.insertBefore(alert, alertContainer.firstChild);
    }
}