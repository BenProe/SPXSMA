// src/utils/calculations.ts

export const calculateSMA = (data: number[], period: number): number[] => {
    const sma: number[] = [];
    for (let i = 0; i <= data.length - period; i++) {
        const slice = data.slice(i, i + period);
        const average = slice.reduce((acc, val) => acc + val, 0) / period;
        sma.push(average);
    }
    return sma;
};

export const generateBuySellSignals = (spxData: number[], smaData: number[]): string[] => {
    const signals: string[] = [];
    for (let i = 1; i < spxData.length; i++) {
        if (spxData[i] > smaData[i - 1] && spxData[i - 1] <= smaData[i - 1]) {
            signals.push('Buy');
        } else if (spxData[i] < smaData[i - 1] && spxData[i - 1] >= smaData[i - 1]) {
            signals.push('Sell');
        } else {
            signals.push('Hold');
        }
    }
    return signals;
};