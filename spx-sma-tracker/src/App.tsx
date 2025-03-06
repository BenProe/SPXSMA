import React, { useEffect, useState } from 'react';
import Chart from './components/Chart';
import Table from './components/Table';
import Alerts from './components/Alerts';
import { fetchSPXData } from './services/api';
import { calculateSMA } from './utils/calculations';

const App = () => {
    const [spxData, setSpxData] = useState([]);
    const [sma200, setSma200] = useState(null);
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchSPXData();
            setSpxData(data);
            const sma = calculateSMA(data, 200);
            setSma200(sma);
            checkAlerts(data, sma);
        };

        getData();
    }, []);

    const checkAlerts = (data, sma) => {
        const newAlerts = [];
        // Logic to determine alerts based on SMA crossings
        // Add alerts to newAlerts array
        setAlerts(newAlerts);
    };

    return (
        <div>
            <h1>S&P 500 SMA Tracker</h1>
            <Chart data={spxData} sma200={sma200} />
            <Table data={spxData} sma200={sma200} />
            <Alerts alerts={alerts} />
        </div>
    );
};

export default App;