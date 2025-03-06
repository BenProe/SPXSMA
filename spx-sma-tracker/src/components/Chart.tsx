import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchSPXData } from '../services/api';
import { calculateSMA } from '../utils/calculations';

const Chart = () => {
    const [spxData, setSpxData] = useState([]);
    const [smaData, setSmaData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchSPXData();
            setSpxData(data);
            const sma = calculateSMA(data, 200);
            setSmaData(sma);
        };
        getData();
    }, []);

    const chartData = {
        labels: spxData.map(data => data.date),
        datasets: [
            {
                label: 'S&P 500',
                data: spxData.map(data => data.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
            {
                label: '200-Day SMA',
                data: smaData,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
            },
        ],
    };

    return (
        <div>
            <h2>S&P 500 and 200-Day SMA</h2>
            <Line data={chartData} />
        </div>
    );
};

export default Chart;