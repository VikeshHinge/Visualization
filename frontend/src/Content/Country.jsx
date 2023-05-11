import React,{useState,useEffect} from 'react';
import {Box,Text,Flex,Image} from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import YearChart from './YearChart';
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

const CountryCard = ({Data}) => {
    
    const [country,setCountry] = useState('United States of America')
    const [story,setStory] = useState([])
    const [yearData,setYearData] = useState({})
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
        borderWidth:0,
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
    let year ={}
    let source = {}

       let newData = Data.filter((ele)=>ele.country===country)
        setStory(newData)
      
        for(let i=0; i<newData.length; i++){
            if(obj[newData[i].topic]===undefined && newData[i].topic !==''){
                obj[newData[i].topic]=1
            }else if( newData[i].topic !==''){
                obj[newData[i].topic]++;
            }

            if(source[newData[i].source]===undefined && newData.source!==''){
              source[newData[i].source]=1;
            }else{
              source[newData[i].source]++
            }
           
            if(newData[i].published){
              let yr = newData[i].published;
              let date = new Date(yr);
              let time = date.getFullYear();
              if(year[time]===undefined){
                year[time]=1;
              }else{
                year[time]++;
              }
            }

        }
        
      const Topics = Object.keys(obj)
      const Count = Object.values(obj)
      setYearData(year)

       setTopic(
        {
            labels:Topics,
            datasets:[
                {  
                    type:'line',
                    label: 'Topics Covered',
                    data:Count ,
                    borderColor: colors,
                    backgroundColor:colors,
                }
               ]
           }
       )

},[country,Data])

  return (
    <Box w='90%' p='10px' justifyContent='space-between'>
     <Box>
     <Flex justifyContent='space-between' gap='10px' >
       <select name="Select Country" id="" style={{background:'#68ae00',fontSize:'20px',fontWeight:'bold'}} 
        onChange={(e)=>setCountry(e.target.value)}
        >
            {Countries && Countries.map((ele,i)=><option style={{fontSize:'12px'}} key={i} value={ele}>{ele}</option>)}
        </select>
       </Flex>

       <Flex gap='20px' justifyContent='space-between' flexDirection={{base:'column',md:'row'}}>
       <Box w='100%'>
         <Line data={topic} options={options}/>
       </Box>
       <Box>
       <Flex m='auto' w='150px' flexWrap='revert-layer' justifyContent='center' alignItems='center' position='relative'>
           {Flag && Flag.map((ele,i)=><Image key={ele} src={ele} alt='country'w='25px'h='20px'  zIndex={i} left={i+1} />)}
      </Flex>
       <YearChart yearData={yearData} />
       </Box>
       </Flex>

      <Box p='5px' h='160px' border='1px solid' overflowY='scroll' mt='20px' fontSize='sm' >
        {
          story && story.map((ele)=><Box key={ele._id}>
              <Flex p='5px' justifyContent='space-between' alignItems='center' flexWrap='wrap' _hover={{bg:'gray'}}>
                <a href={ele.url}> <Text >{ele.title}</Text> </a>
                <Text as='b' color='black' fontSize='10px' bg='red.300' w='fit-content' pl='3px' pr='3px' borderRadius='10px'>Source: {ele.source}</Text>
               
              </Flex>
            <hr />
          </Box>)
        }
      </Box>
     </Box>
    </Box>

  )
}

export default CountryCard;
