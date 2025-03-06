import React from 'react';

interface SPXData {
    date: string;
    value: number;
    signal: 'Buy' | 'Sell' | 'Hold';
}

interface TableProps {
    data: SPXData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>SPX Value</th>
                    <th>Signal</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.value.toFixed(2)}</td>
                        <td>{row.signal}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;