import React from 'react';
import { Chart } from 'react-google-charts';
import numericalToAlphabeticalMonth from './Months';

const ColumnChart = ({ data }) => {
    let newUsers;

    try{
        newUsers = data.filter(element => element.status === "Pending");
    } catch(err) {
        console.error(err);
    }

    const newUsersByMonth = {};

    newUsers.forEach(element => {
        let month = element.date.slice(5, 7);
        month = numericalToAlphabeticalMonth(month);
        if(!newUsersByMonth[month]) {
            newUsersByMonth[month] = 0;
        }
        newUsersByMonth[month]++;
    })


  
    const chartDataForReverse = [];
    for (const month in newUsersByMonth) {
        chartDataForReverse.push([month, newUsersByMonth[month]]);
    }
    chartDataForReverse.reverse();


    const chartData = [["date", "New Users"], ...chartDataForReverse];


    const chartOptions = {
        chartArea: { width: '100%', height: "90%" },
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
          },
          hAxis: {
            gridlines: { color: 'transparent' }, // Remove horizontal gridlines
            textPosition: 'none', // Remove horizontal axis labels
            baseLineColor: "transparent",
          },
          vAxis: {
            gridlines: { color: 'transparent' }, // Remove vertical gridlines
            textPosition: 'none', // Remove vertical axis labels
          },
          legend: 'none',
          backgroundColor: "transparent",
          colors: ['#068FFF'],
          
      }

  return (
    <Chart
      width={0}
      height={50}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={chartOptions}
    />
  );
};

export default ColumnChart;

