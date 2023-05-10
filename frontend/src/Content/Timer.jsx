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
 
<Box borderRadius='5px'  h='150px' bg='#086F83' >
 <Box w='fit-content' m='auto' p='5px' mt='10px'>
 <Text fontSize='3xl'>{timer}</Text>
  <Text>{Today}</Text>
 </Box>
<Box>
{event>=7 && event<10?<WiSunrise size='65px' color='orange' />:event>=10 && event<18?<WiDayCloudy size='65px'color='yellow' />:event>=18 & event<=19?<WiSunset size='65px' color='orange'/>:<WiNightAltCloudy size='65px' />}
</Box>
</Box>
 
  )
}

export default Timer