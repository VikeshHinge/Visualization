import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { colors } from './Objects';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    ArcElement,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

const YearChart = ({yearData}) => {
  

    const options = {
        plugins: {
          legend: {
            display: true,
            labels: {
                boxWidth: 5,
                boxHeight:5,
                boxBorder:'none'
            },
            hoverOffset: 4
          },
        },
      };
  
let year = Object.keys(yearData)
let count = Object.values(yearData)

let Data =   {
  labels:year,
  datasets:[
      { 
          label: 'News Cover',
          data:count,
          borderColor:colors,
          backgroundColor:colors,
      }
     ]
 }
  

  return (
    <div style={{width:'250px'}}> 
      <Doughnut data={Data} options={options} />
    </div>
  )
}

export default YearChart;
