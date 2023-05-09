import React,{useState,useEffect} from 'react';
import {Box,Text,Flex,Image} from '@chakra-ui/react';
import { Chart,Bar } from 'react-chartjs-2';

import axios from 'axios';
import { Countries,colors,Flag } from './Objects';


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

const CountryCard = () => {
    
    const [country,setCountry] = useState('United States of America')

const [topic,setTopic] = useState(
    {
        labels:[],
        datasets:[
            {  type: 'line',
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
    },
  };

useEffect(()=>{
    let obj ={}
    let region ={}
    let Intensity={}
    let Likelihood={}
    let Relevance={}

    const getData = async() => {

        let {data:{Data}} = await axios.get(`http://localhost:4040/data?country=${country}`)
        //console.log(Data)
      
        for(let i=0; i<Data.length; i++){
            if(obj[Data[i].topic]===undefined && Data[i].topic !==''){
                obj[Data[i].topic]=1
            }else if( Data[i].topic !==''){
                obj[Data[i].topic]++;
            }
        }
        
      const Topics = Object.keys(obj)
      const Count = Object.values(obj)
      console.log(Topics,Count)
       setTopic(
        {
            labels:Topics,
            datasets:[
                {  type:'line',
                    label: 'Topics Covered',
                    data:Count ,
                    borderColor: colors,
                    backgroundColor:colors,
                }
               ]
           }
       )
    };
   
    getData()

},[country])

  return (
    <Box w='50%'>
       <Flex justifyContent='space-between' gap='10px'>
       <select name="Select Country" id="" style={{background:'none',fontSize:'12px'}} 
        onChange={(e)=>setCountry(e.target.value)}
        >
            {
            Countries && Countries.map((ele,i)=>{
               return <option key={i} value={ele}>{ele}</option>
             })
            }
        </select>
        <Flex w='150px' flexWrap='revert-layer' justifyContent='center' alignItems='center' position='relative'>
           {
            Flag && Flag.map((ele,i)=>{
                return(
                    <Image key={ele} src={ele} alt='country'w='25px'h='20px'  zIndex={i} left={i+1} />
                )
            })
           }
        </Flex>
       </Flex>

       <Box>
       <Bar data={topic} options={options}/>
       </Box>
    </Box>
  )
}

export default CountryCard;
