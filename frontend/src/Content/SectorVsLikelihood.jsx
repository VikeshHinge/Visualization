import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Chart,Bar } from 'react-chartjs-2';
import {Box,Flex} from '@chakra-ui/react'
import {colors} from './Objects.js';
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

const SectorvsLikelihood = () => {
    const [region,setRegion] = useState('Northern America')
    const [sector,setSector] = useState(
        {
            labels:[],
            datasets:[
                {   type: 'bar',
                    label: 'Sector',
                    data:[],
                    // borderColor: '#ffa500',
                    // backgroundColor: '#ffa500',
                }
               ]
           }
    )

    const options = {
        indexAxis: 'y',
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        // barPercentage:1,
        elements: {
          bar: {
            borderWidth:1,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text:"sector",
            color:'white'
          },
        },
      };
  

    useEffect(()=>{
        let obj = {}
        let Intensity={}
       const getData = async() => {
           let {data:{Data}} = await axios.get('http://localhost:4040/data')
     
      
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
                       // borderColor: 'red',
                        backgroundColor: '#ff4444',
                    },
                    {   type: 'bar',
                    label: 'Intensity',
                    data:Inten,
                  //  borderColor: 'aqua',
                    backgroundColor: '#0099ff',
                }
                   ]
               }
          )


       }
        
       getData()

    },[region])

  return (
    <Flex alignItems='center' flexDirection={{base:'column',md:'row'}}>
       <Box w={{base:'100%',md:'60%'}}>
       <Box w='fit-content' fontWeight='bold' >
        Region: <select name="region" style={{background:'none',fontSize:'12px',fontSize:'20px',fontWeight:'bold'}}  onChange={(e)=>setRegion(e.target.value)}>
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

      <One region={region}/>
    </Flex>
  )
}

export default SectorvsLikelihood
