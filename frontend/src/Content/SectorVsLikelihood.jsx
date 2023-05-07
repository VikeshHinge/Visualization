import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Chart,Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
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
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const SectorvsLikelihood = () => {
    const [sector,setSector] = useState(
        {
            labels:[],
            datasets:[
                {   type: 'bar',
                    label: 'Sector',
                    data:[],
                    borderColor: '#ffa500',
                    backgroundColor: '#ffa500',
                }
               ]
           }
    )

    const options = {
        indexAxis: 'x',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text:"Brand's Ratings",
            color:'white'
          },
        },
      };
  

    useEffect(()=>{
        let obj = {}
        
       const getData = async() => {
           let {data:{Data}} = await axios.get('http://localhost:4040/data')
     
            
           for(let i=0; i<Data.length; i++){
             if(Data[i].sector && Data[i].likelihood){
               // console.log(Data[i].sector,  typeof(Data[i].likelihood))
                if(obj[Data[i].sector]=== undefined){
                    obj[Data[i].sector] = Data[i].likelihood;
                }else{
                    obj[Data[i].sector] +=Data[i].likelihood
                }
             }
           }
           console.log(obj)

           const Sector = Object.keys(obj)
           const Likelihood = Object.values(obj)
          console.log(Sector,Likelihood)
          setSector(
            {
                labels:Sector,
                datasets:[
                    {   type: 'line',
                        label: 'Likelihood',
                        data:Likelihood,
                        borderColor: '#ffa500',
                        backgroundColor: '#ffa500',
                    }
                   ]
               }
          )


       }
        
       getData()

    },[])

  return (
    <div>
      <Chart data={sector} options={options} />
    </div>
  )
}

export default SectorvsLikelihood
