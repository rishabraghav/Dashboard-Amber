import React from "react";
import Chart from "react-google-charts";


const BarChart = ({ total }) => {

    const chartData = [
        ['Total Income', 'Amount'],
        ["", total]
    ];

    const chartOptions = {
        title: "",
        chartArea: { width: "100%" },
        height: 10,
        width: "100%",
        bars: "horizontal",
        legend: "none",
        hAxis: {
            minValue: 0,
            maxValue: 14000,
            ticks: [0,1000,2000,3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000],
            gridlines: { color: 'transparent' },
            baselineColor: 'transparent',
        },
        colors: ['#4E4FEB']
    };

    return (
        <Chart
            width={"100%"}
            height={0}
            chartType="BarChart"
            loader={<div>Loading Chart...</div>}
            data={chartData}
            options={chartOptions}
        />
    );
}


export default BarChart;