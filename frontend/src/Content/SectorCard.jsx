
import React, { useEffect, useState } from 'react';
import {Box,Text,Flex,Select} from '@chakra-ui/react';
import axios from 'axios';
import Table from './Table.jsx';
import { Bar, Doughnut } from 'react-chartjs-2';
import {colors} from './Objects.js';

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

const SectorCard = () => {
const [sector,setSector] = useState('Energy')
const [Region,setRegion]=useState([])
const [relevance,setRelevance] = useState([])
const [likelihood,setLikelihood] = useState([])
const [intensity,setIntnsity] = useState([])

const [topic,setTopic] = useState(
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
    let obj ={}
    let region ={}
    let Intensity={}
    let Likelihood={}
    let Relevance={}

    const getData = async() => {
        let {data:{Data}} = await axios.get('http://localhost:4040/data')

        for(let i=0; i<Data.length; i++){
          if( obj[Data[i].topic]===undefined && Data[i].sector===sector){
            obj[Data[i].topic]=1
          }else if( Data[i].sector===sector) {
            obj[Data[i].topic]++
          }

            if( region[Data[i].region]===undefined && Data[i].sector===sector && Data[i].region!==''){
              region[Data[i].region]=1
              Intensity[Data[i].region]=Data[i].intensity
              Likelihood[Data[i].region]=Data[i].likelihood
              Relevance[Data[i].region]=Data[i].relevance
            }else if( Data[i].sector===sector && Data[i].region!=='') {
                Intensity[Data[i].region]+=Data[i].intensity
                Likelihood[Data[i].region]+=Data[i].likelihood
                Relevance[Data[i].region]+=Data[i].relevance
            }
        

        }

        
           setRegion(Object.keys(region))
           setRelevance(Object.values(Relevance))
           setIntnsity(Object.values(Intensity))
           setLikelihood(Object.values(Likelihood))
        let others=0
        for(let key in obj){
            if(obj[key]<=10){
                others += obj[key]
                delete obj [key]
            }
        }
        obj['others']=others

        let topics = Object.keys(obj)
        let values = Object.values(obj)
        
        
        setTopic(
            {
                labels:topics,
                datasets:[
                    { 
                        label: `Topic-Cover`,
                        data:values,
                        borderColor: colors,
                        backgroundColor: colors,
                    }
                   ]
               }
        )

    };

    getData()

},[sector])

  return (
  <Flex p='10px' border='1px solid' gap='10px'>
     <Box bg='#132c4c' rounded='md' p='5px' >
      <select  style={{background:'none',border:'none',background:'#132c4c',fontSize:'25px',fontWeight:'bold'}}  onChange={(e)=>setSector(e.target.value)}>
        <option style={{fontSize:'13px'}} value='Energy'>Energy</option>
        <option style={{fontSize:'13px'}} value="Environment">Environment</option>
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
      <Bar data={topic} options={options}/>
     </Box>
     <Table Region={Region} relevance={relevance} intensity={intensity} likelihood={likelihood} />
  </Flex>
  )
}

export default SectorCard
