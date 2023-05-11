import React from 'react';
import {Box,Flex,Text,Image} from '@chakra-ui/react'
import { GoFileMedia,GoHome,GoSettings,GoGear,GoTasklist } from "react-icons/go";
import Timer from './Timer';

const Sidebar = () => {
  return (
  <Box ml='5px' color='white' cursor='default' position='sticky' top='0'>
     <Box textAlign='center' color='white' boxShadow='md' bgGradient='linear(to-r, #1f7faa,#4370ba,#6c61cc)'m='auto' p='10px' roundedBottomRight='md' mb='10px' >
        <Image h='40px'm='auto' src='https://dataoil.blackcoffer.com/assets/images/Logo/white1.png'  alt='Blackcoffer' />
     </Box>
     <Box spacing={4} align='stretch' p='10px' pt='15px' pb='15px' bgGradient='linear(to-r, #1f7faa,#4370ba)' boxShadow='xl' rounded='lg'>

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
    <Timer/>
  </Box>
  )
}

export default Sidebar
