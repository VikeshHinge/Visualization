import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Chart,Bar } from 'react-chartjs-2';
import {Box} from '@chakra-ui/react'
import {colors} from './Objects.js'
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
    const [region,setRegion] = useState('Western Asia')
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
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        barPercentage: 0.9,
        elements: {
          bar: {
            borderWidth: 2,
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
                        borderColor: 'red',
                        backgroundColor: 'red',
                    },
                    {   type: 'bar',
                    label: 'Intensity',
                    data:Inten,
                    borderColor: 'aqua',
                    backgroundColor: 'aqua',
                }
                   ]
               }
          )


       }
        
       getData()

    },[region])

  return (
    <div  style={{width:'50%',border:'1px solid gray',padding:'3px'}} > 
      <Box bg='#132c4c' w='fit-content'>
      Region: <select name="region" style={{background:'none',border:'none',backgroundColor:'#132c4c'}}  onChange={(e)=>setRegion(e.target.value)}>
        <option value="Northern America">Northern America</option>
        <option value="Central America">Central America</option>
        <option value="Western Africa">Western Africa</option>
        <option value="Western Asia">Western Asia</option>
        <option value="Eastern Europe">Eastern Europe</option>
        <option value="Western Asia">Western Asia</option>
        <option value="Central Africa">Central Africa</option>
        <option value="Southern Asia">Southern Asia</option>
      </select>
      </Box>
      <Chart data={sector} options={options} />
    </div>
  )
}

export default SectorvsLikelihood
