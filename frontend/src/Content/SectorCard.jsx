
import React, { useEffect, useState } from 'react';
import {Box,Text,Flex,Select} from '@chakra-ui/react';
import Table from './Table.jsx';
import { Bar, Doughnut,PolarArea } from 'react-chartjs-2';
import {colors} from './Objects.js';

import {
    Chart as ChartJS,
    RadialLinearScale,
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
    RadialLinearScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const SectorCard = ({Data}) => {
const [sector,setSector] = useState('Energy')
const [Region,setRegion]=useState([])
const [relevance,setRelevance] = useState([])
const [likelihood,setLikelihood] = useState([])
const [intensity,setIntnsity] = useState([])

const [topic,setTopic] = useState(
    {
        labels:[],
        datasets:[
            { type: 'line',
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
            boxWidth: 10,
            boxHeight:5,
            boxBorder:'none'
        },
        hoverOffset: 4
      },
    },
  };

useEffect(()=>{
    let obj ={}
    let region ={}
    let Intensity={}
    let Likelihood={}
    let Relevance={}

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
            {   type: 'line',
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

},[sector,Data])

  return (
  <Flex p='10px' justifyContent='space-evenly' m='auto' mt='40px' flexDirection={{base:'column',md:'row'}}>
     <Box w={{base:'100%',md:'50%'}} bg='Blue 600' rounded='md' p='5px' >
     Sector: <select  style={{background:'#68ae00',fontSize:'12px',fontSize:'20px',fontWeight:'bold'}}  onChange={(e)=>setSector(e.target.value)}>
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
