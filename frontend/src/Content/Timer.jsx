import React, { useState,useEffect } from 'react';
import { Box,Flex,Text,Image, Stack } from '@chakra-ui/react';
import { WiSunrise,WiDaySunnyOvercast,WiSunset,WiNightAltCloudy, WiDayCloudy } from "react-icons/wi";


const Timer = () => {
    let time = new Date().toLocaleTimeString()
const [timer,setTimer] = useState(time)
const [event,setEvent] = useState('')



const today = new Date();
const month = today.toLocaleString('default', { month: 'long' }); 
const day = today.getDate(); 
const year = today.getFullYear(); 
const Today = `${month} ${day} ${year}`;

   useEffect(() => {
    
    const intervalId = setInterval(() => {
        time = new Date()
        setEvent(time.getHours())
        setTimer(time.toLocaleTimeString())
      }, 1000);
     
    return () => clearInterval(intervalId);
  }, []);

  return (
 
<Box borderRadius='5px'  h='120px' bg='#4370ba' boxShadow='md' position='relative' textAlign='center'mt='10px'>
<Image src='https://flagpedia.net/data/flags/h80/in.webp' w='30px' h='20px' alt='india' />
 <Box w='fit-content' m='auto' p='5px' >
 <Text fontSize='3xl' as='b'>{timer}</Text>
  <Text>{Today}</Text>
 </Box>
<Box position='absolute' top='40px'>
{event>=7 && event<10?<WiSunrise size='65px' color='orange' />:event>=10 && event<18?<WiDayCloudy size='65px'color='yellow' />:<WiNightAltCloudy size='65px' />}
</Box>
</Box>
 
  )
}

export default Timer