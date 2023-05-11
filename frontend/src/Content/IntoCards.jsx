import React,{useState,useEffect} from 'react'
import CountUp from 'react-countup';
import {Box,Text,Flex} from '@chakra-ui/react';
import { RiArticleLine } from "react-icons/ri";
import { GoBroadcast,GoLocation } from "react-icons/go";


const IntoCards = ({Data}) => {
  const [data,setData] = useState([])
  const [sources,setSources] = useState([])
  const [Country,setCountry] = useState([])

  useEffect(()=>{
   
           setData(Data)
    
            let src=[];
            let ctry = [];

          for(let i=0; i<Data.length; i++){
   
             if(Data[i].source !=='' && !src.includes(Data[i].source) ){
               src.push(Data[i].source)
             }
             if(Data[i].country !=='' && !ctry.includes(Data[i].country) ){
              ctry.push(Data[i].country)
            }
          }

        setSources(src)
        setCountry(ctry)

},[Data])





  return (
  <Flex alignItems='center' justifyContent='space-around'w={{base:'100%',md:'70%'}} mb='20px' 
  color='white' flexDirection={{base:'column',md:'row'}} gap='10px'>

      <Flex w={{base:'80%',md:'70%'}}  bg='#68ae00' boxShadow='md' p='10px' textAlign='center' rounded='md' alignItems='center' justifyContent='space-between' gap='10px'>
        <Box>
        <Text as='b' fontSize='lg'>Total News Articals</Text><br />
        <Text as='b' fontSize='4xl'><CountUp start={10} end={data.length}duration={1.6}></CountUp></Text>
        </Box>
         <Box border='2px solid' p='5px' borderRadius='50%'>
         <RiArticleLine size='35px'/>
         </Box>
      </Flex>

      <Flex w={{base:'80%',md:'70%'}} bg='#e36974' boxShadow='md' p='10px' textAlign='center' rounded='md' alignItems='center' gap='10px' justifyContent='space-between'>
        <Box>
        <Text as='b' fontSize='lg'>Our Total Source</Text><br />
        <Text as='b' fontSize='4xl'><CountUp start={10} end={sources.length}duration={1.6}></CountUp></Text>
        </Box>
         <Box border='2px solid' p='5px' borderRadius='50%'>
         <GoBroadcast size='35px'/>
         </Box>
      </Flex>
      
      <Flex w={{base:'80%',md:'70%'}} bg='#66c88d' boxShadow='md' p='10px' textAlign='center' rounded='md' alignItems='center' gap='10px' justifyContent='space-between'>
        <Box>
        <Text as='b' fontSize='lg'>Total Countries</Text><br />
        <Text as='b' fontSize='4xl'><CountUp start={10} end={Country.length}duration={1.6}></CountUp></Text>
        </Box>
         <Box border='2px solid' p='5px' borderRadius='50%'>
         <GoLocation size='35px'/>
         </Box>
      </Flex>

  </Flex>
  )
}

export default IntoCards
