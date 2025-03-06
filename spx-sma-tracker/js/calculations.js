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

function getSignal(price, sma) {
    if (!sma) return 'N/A';
    return price > sma ? 'BUY' : 'SELL';
}

function findLastSignalChange(data, smaData) {
    for (let i = data.length - 2; i >= 0; i--) {
        const currentSignal = getSignal(data[i+1].price, smaData[i+1]?.value);
        const prevSignal = getSignal(data[i].price, smaData[i]?.value);
        
        if (currentSignal !== prevSignal && currentSignal !== 'N/A' && prevSignal !== 'N/A') {
            return {
                date: data[i+1].date,
                signal: currentSignal
            };
        }
    }
    return null;
}

function createTable(container, data, smaData) {
    const tbody = document.getElementById('data-body');
    tbody.innerHTML = '';

    // Show only the last 30 days, reversed to show most recent first
    const recentData = data.slice(-30).reverse();
    const recentSMA = smaData.slice(-30).reverse();

    // Add last signal change row first
    const lastChange = findLastSignalChange(data, smaData);
    if (lastChange) {
        const changeRow = document.createElement('tr');
        changeRow.className = 'signal-change';
        changeRow.innerHTML = `
            <td colspan="4">Last Signal Change (${lastChange.date.toLocaleDateString('de-DE')}): 
                <span class="${lastChange.signal.toLowerCase()}">${lastChange.signal}</span>
            </td>
        `;
        tbody.appendChild(changeRow);
    }

    // Add data rows
    recentData.forEach((item, index) => {
        const row = document.createElement('tr');
        const signal = getSignal(item.price, recentSMA[index]?.value);
        
        row.innerHTML = `
            <td>${item.date.toLocaleDateString('de-DE')}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${recentSMA[index]?.value?.toFixed(2) || 'N/A'}</td>
            <td class="${signal.toLowerCase()}">${signal}</td>
        `;
        tbody.appendChild(row);
    });
}

function generateAlerts(data, smaData) {
    const alertContainer = document.getElementById('alert-messages');
    alertContainer.innerHTML = ''; // Clear existing alerts

    // Get the most recent data points
    const lastPrice = data[data.length - 1].price;
    const lastSMA = smaData[smaData.length - 1]?.value;
    const prevPrice = data[data.length - 2].price;
    const prevSMA = smaData[smaData.length - 2]?.value;

    // Check for crossover
    if ((prevPrice <= prevSMA && lastPrice > lastSMA) || 
        (prevPrice >= prevSMA && lastPrice < lastSMA)) {
        
        const signal = lastPrice > lastSMA ? 'BUY' : 'SELL';
        const alert = document.createElement('div');
        alert.className = `alert ${signal.toLowerCase()}`;
        alert.innerHTML = `
            <strong>${signal} Signal:</strong> 
            SPX (${lastPrice.toFixed(2)}) crossed ${signal === 'BUY' ? 'above' : 'below'} 
            SMA200 (${lastSMA.toFixed(2)}) on ${data[data.length - 1].date.toLocaleDateString('de-DE')}
        `;
        alertContainer.appendChild(alert);
    }
}