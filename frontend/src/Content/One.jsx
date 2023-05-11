import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Doughnut,Chart,Bar,PolarArea} from 'react-chartjs-2';
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

const One = ({region,Data}) => {
    const [Sector,setSector] = useState('Energy')
    const [likelihood,setLikelihood] = useState(
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
            hoverOffset:10
          },
        },
      };
  

    useEffect(()=>{
        let obj = {}
           for(let i=0; i<Data.length; i++){
    
             if(Data[i].sector===Sector && Data[i].relevance && Data[i].region===region){
                if(obj[Data[i].topic]=== undefined){
                    obj[Data[i].topic] = Data[i].relevance;
                }else{
                    obj[Data[i].topic] +=Data[i].relevance
                }
             }
           }

           console.log(obj)
           const key = Object.keys(obj)
           const value = Object.values(obj)
         
        setLikelihood({
          type: 'polarArea',
            labels: key,
            datasets:[
                {
                    label: 'Relevance',
                    data: value,
                     borderColor:colors,
                    backgroundColor:colors
                },
             
               ]
           })
      
    },[Sector,region,Data])

  return (
    <div> 
        <Box w='fit-content' fontWeight='bold' fontSize='xl'>
       <select  name="region" style={{background:'#68ae00',border:'none',backgroundColor:'none',fontWeight:'bold'}}  onChange={(e)=>setSector(e.target.value)}>
       <option style={{fontSize:'13px'}} value='Energy'>Energy</option>
        <option style={{fontSize:'13px'}} value="Government">Government</option>
        <option style={{fontSize:'13px'}} value="Aerospace & defence">Aerospace & defence</option>
        <option style={{fontSize:'13px'}} value="Manufacturing">Manufacturing</option>
        <option style={{fontSize:'13px'}} value="Information Technology">Information Technology</option>
        <option style={{fontSize:'13px'}} value="Financial services">Financial services</option>
        <option style={{fontSize:'13px'}} value="Healthcare">Healthcare</option>
        <option style={{fontSize:'13px'}} value="Retail">Retail</option>
        <option style={{fontSize:'13px'}} value="Support services">Support services</option>
        <option style={{fontSize:'13px'}} value="Food & agriculture">Food & agriculture</option>
        </select>
       </Box>
      <Doughnut data={likelihood} options={options} />
    </div>
  )
}

export default One
