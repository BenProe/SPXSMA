import React, { useEffect, useState } from 'react';

const Alerts = ({ spxData, sma200 }) => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const newAlerts = [];

        spxData.forEach((dataPoint, index) => {
            if (index > 0) {
                const previousValue = spxData[index - 1].value;
                const currentValue = dataPoint.value;

                if (previousValue < sma200 && currentValue >= sma200) {
                    newAlerts.push(`Buy Alert: SPX crossed above SMA200 on ${dataPoint.date}`);
                } else if (previousValue >= sma200 && currentValue < sma200) {
                    newAlerts.push(`Sell Alert: SPX crossed below SMA200 on ${dataPoint.date}`);
                }
            }
        });

        setAlerts(newAlerts);
    }, [spxData, sma200]);

    return (
        <div className="alerts">
            <h2>Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert}</li>
                ))}
            </ul>
        </div>
    );
};

export default Alerts;