function calculateSMA(data, period) {
    const sma = [];
    for (let i = 0; i <= data.length - period; i++) {
        const slice = data.slice(i, i + period);
        const average = slice.reduce((sum, value) => sum + value, 0) / period;
        sma.push(average);
    }
    return sma;
}

function generateSignals(spxValues, smaValues) {
    const signals = [];
    for (let i = 1; i < spxValues.length; i++) {
        if (spxValues[i] > smaValues[i - 1] && spxValues[i - 1] <= smaValues[i - 1]) {
            signals.push('Buy');
        } else if (spxValues[i] < smaValues[i - 1] && spxValues[i - 1] >= smaValues[i - 1]) {
            signals.push('Sell');
        } else {
            signals.push('Hold');
        }
    }
    return signals;
}