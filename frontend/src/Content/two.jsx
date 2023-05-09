import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Doughnut,Chart,Bar } from 'react-chartjs-2';
import {Box,Select} from '@chakra-ui/react'

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

const One = ({Country}) => {
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
  

    useEffect(()=>{
     
       let Intensity = 0;
       let Likelihood = 0;
       let Relevance = 0;
       const getData = async() => {
           let {data:{Data}} = await axios.get('http://localhost:4040/data')
     
           for(let i=0; i<Data.length; i++){
             if(Data[i].intensity && Data[i].likelihood &&  Data[i].relevance && Data[i].country===Country){
                // if(obj[Data[i].topic]=== undefined){
                //     obj[Data[i].topic] = Data[i].likelihood;
                // }else{
                //     obj[Data[i].topic] +=Data[i].likelihood
                // }
                Intensity +=  Data[i].intensity;
                Likelihood += Data[i].likelihood;
                Relevance += Data[i].relevance;
             }
           }
          

        console.log(Intensity,Likelihood,Relevance)
         
        setChartData({
            labels: ['Intensity','Likelihood','Relevance'],
            datasets:[
                {
                    label: 'Likelihood',
                    data:[Intensity,Likelihood,Relevance],
                     borderColor:['red','orange'],
                    backgroundColor: ['#f554c2','aqua','green','orange','pink','yellow']
                }
               ]
           })
      
       }
        
       getData()

    },[Country])

  return (
    <div style={{width:'250px'}}> 
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export default One
