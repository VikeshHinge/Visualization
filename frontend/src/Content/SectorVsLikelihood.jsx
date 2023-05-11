import React,{useState,useEffect} from 'react'
import { Chart } from 'react-chartjs-2';
import {Box,Flex} from '@chakra-ui/react'
import One from './One.jsx';
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

const SectorvsLikelihood = ({Data}) => {
    const [region,setRegion] = useState('Northern America')
    const [sector,setSector] = useState(
        {
            labels:[],
            datasets:[
                {   type: 'bar',
                    label: 'Sector',
                    data:[]
                }
               ]
           }
    )

    const options = {
        indexAxis: 'x',
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        barPercentage:1,
        elements: {
          bar: {
            borderWidth:0,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
  

    useEffect(()=>{
        let obj = {}
        let Intensity={}
     
           for(let i=0; i<Data.length; i++){
             if(Data[i].sector && Data[i].likelihood && Data[i].region===region ){
          
                if(obj[Data[i].sector]=== undefined){
                    obj[Data[i].sector] = Data[i].likelihood;
                }else{
                    obj[Data[i].sector] +=Data[i].likelihood
                }
                if(Intensity[Data[i].sector]=== undefined){
                  Intensity[Data[i].topic] = Data[i].intensity;
              }else{
                Intensity[Data[i].topic] +=Data[i].intensity
              }
             }
           }
          

           const Sector = Object.keys(obj)
           const Likelihood = Object.values(obj)
           const Inten = Object.values(Intensity)
       
          setSector(
            {
                labels:Sector,
                datasets:[
                    {   type: 'bar',
                        label: 'Likelihood',
                        data:Likelihood,
                        backgroundColor: '#ff4444',
                    },
                    {   type: 'bar',
                    label: 'Intensity',
                    data:Inten,
                    backgroundColor: '#0099ff',
                }
                   ]
               }
          )

    },[region,Data])

  return (
    <Flex alignItems='center' justifyContent='space-between' flexDirection={{base:'column',md:'row'}} p='15px'>
       <Box w={{base:'100%',md:'60%'}}>
       <Box w='fit-content' fontWeight='bold' m='auto' fontSize='xl'>
        Region: <select name="region" style={{background:'#68ae00',fontSize:'20px',fontWeight:'bold',margin:'auto'}}  onChange={(e)=>setRegion(e.target.value)}>
        <option style={{fontSize:'13px'}} value="Northern America">Northern America</option>
        <option style={{fontSize:'13px'}} value="Central America">Central America</option>
        <option style={{fontSize:'13px'}} value="Western Africa">Western Africa</option>
        <option style={{fontSize:'13px'}} value="Western Asia">Western Asia</option>
        <option style={{fontSize:'13px'}} value="Eastern Europe">Eastern Europe</option>
        <option style={{fontSize:'13px'}} value="Western Asia">Western Asia</option>
        <option style={{fontSize:'13px'}} value="Central Africa">Central Africa</option>
        <option style={{fontSize:'13px'}} value="Southern Asia">Southern Asia</option>
      </select>
      </Box >
         <Box h='fit-content'> 
          <Chart data={sector} options={options} />
        </Box>
       </Box>

      <One Data={Data} region={region}/>
    </Flex>
  )
}

export default SectorvsLikelihood
