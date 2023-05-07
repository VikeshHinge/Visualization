import React from 'react';
import {Box,Flex,Text,VStack} from '@chakra-ui/react'
import { IoIosNotificationsOutline,IoIosKeypad, IoIosHome,IoIosCopy} from "react-icons/io";
import { GoFileMedia,GoHome,GoSettings,GoGear,GoTasklist } from "react-icons/go";


const Sidebar = () => {
  return (
  <Box  p='10px' cursor='default' pt='50px'>

     <Box spacing={4} align='stretch' p='10px' pt='15px' pb='15px' bg='#132c4c' color='gray.400' boxShadow='xl' rounded='lg'>

    <Flex alignItems='center' gap='5px'  p='10px' borderBottom='2px solid' _hover={{color:'white'}}>
      <GoHome size='30px'/> 
      <Text fontSize='20px'>Dashboard</Text>
    </Flex>

    <Flex alignItems='center' gap='5px'  p='10px' borderBottom='2px solid' _hover={{color:'white'}}>
      <GoFileMedia size='30px'/> 
      <Text fontSize='20px'>Pages</Text>
    </Flex>

    <Flex alignItems='center' gap='5px'  p='10px' borderBottom='2px solid' _hover={{color:'white'}}>
      <GoSettings size='30px'/> 
      <Text fontSize='20px'>Media</Text>
    </Flex>

    <Box p='10px' mt='20px'>
    <Flex alignItems='center' gap='5px' pb='10px' _hover={{color:'white'}}>
      <GoTasklist size='25px'/> 
      <Text fontSize='20px'>Todo</Text>
    </Flex>
    <Flex alignItems='center' gap='5px'  _hover={{color:'white'}}>
      <GoGear size='25px'/> 
      <Text fontSize='20px'>Setting</Text>
    </Flex>
    </Box>

   </Box>
  </Box>
  )
}

export default Sidebar
