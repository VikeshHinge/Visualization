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

const One = ({Country,Sectors}) => {
    const [Sector,setSector] = useState(Sectors)
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
        let obj = {}
        
       const getData = async() => {
           let {data:{Data}} = await axios.get('http://localhost:4040/data')
     
            //Energy,Manufacturing,Environment,Financial services

           for(let i=0; i<Data.length; i++){
            //&& Data[i].region==='Eastern Asia' && Data[i].sector==='Energy'
             if(Data[i].sector===Sector && Data[i].likelihood && Data[i].country===Country){
                if(obj[Data[i].topic]=== undefined){
                    obj[Data[i].topic] = Data[i].likelihood;
                }else{
                    obj[Data[i].topic] +=Data[i].likelihood
                }
             }
           }
           console.log(obj)

           const key = Object.keys(obj)
           const value = Object.values(obj)
         
        setLikelihood({
            labels: key,
            datasets:[
                {
                    label: 'Likelihood',
                    data: value,
                     borderColor:['red','orange'],
                    backgroundColor: ['#f554c2','aqua','green','orange','pink','yellow']
                },
             
               ]
           })
      
       }
        
       getData()

    },[Sector,Country])

  return (
    <div style={{width:'250px'}}> 
       <Box fontSize='12px' textAlign='center'>
       Likelihood: <select name="Sector" onChange={(ele)=>setSector(ele.target.value)} style={{background:'none' ,backgroundColor:'none',fontSize:'12px',border:'none'}}>
            <option value={Sectors}>{Sectors}</option>
            <option value="Manufacturing">Manufacturing</option>
        </select>
       </Box>
      <Doughnut data={likelihood} options={options} />
    </div>
  )
}

export default One
