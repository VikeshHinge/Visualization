import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Doughnut,Chart,Bar } from 'react-chartjs-2';
import {Box,Select} from '@chakra-ui/react';
import { colors } from './Objects';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const YearChart = ({yearData}) => {
    const [chartData,setChartData] = useState(
        {
            labels:[],
            datasets:[
                { 
                    label: 'Sector',
                    data:[],
                    borderColor: '#ffa500',
                    backgroundColor: '#ffa500',
                }
               ]
           }
    )

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
            // title: {
            //   display: true,
            //   text: "Sector",
            //   color: 'white'
            // }
          },
        },
      };
  
let year = Object.keys(yearData)
let count = Object.values(yearData)

let Data =   {
  labels:year,
  datasets:[
      { 
          label: 'Sector',
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
