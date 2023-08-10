import React from 'react';
import { Chart } from 'react-google-charts';


const AreaChart = ({ data }) => {
    
    let salesData;

    try{
        salesData = data.filter(element => element.status === 'Paid');
    } catch (err) {
        console.error(err);
    }

    const chartData = [['date', 'sales']];

    salesData.forEach(transaction => {
        const date = new Date(transaction.date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        const balance = transaction.amount; // Calculate balance for each transaction
        chartData.push([formattedDate, balance]);
    });



    const chartOptions = {
        title: "Balance Over Time",
        chartArea: { width: '100%', height: "90%" },
        hAxis: {
            title: "Date",
            gridlines: { color: 'transparent' },
            textPosition: 'none', // Remove horizontal axis labels
            baseLineColor: "transparent",
        },
        vAxis: {
            title: "Balance",
            gridlines: { color: 'transparent' },
            textPosition: 'none', // Remove horizontal axis labels
            baseLineColor: "transparent",
            minValue: 0,
        },
        isStacked: true,
        legend: { position: "none" },
        series: {
            0: { color: "#4E4FEB" }, // Change the color of the first series (line)
        },
    }

    return (
        <Chart
            width={'100%'}
            height={165}
            chartType="AreaChart"
            loader={<div>Loading Chart...</div>}
            data={chartData}
            options={chartOptions}
        />
    );
};

export default AreaChart;

