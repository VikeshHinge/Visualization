import React, { useState } from 'react';
import { IoIosNotificationsOutline,IoIosKeypad, IoMdSearch,IoIosSunny,IoMdMoon} from "react-icons/io";
import {Box,Flex,Image,Text,InputGroup,Input,InputRightAddon, theme} from '@chakra-ui/react';
import Sidedrower from './Sidedrower';

const Navbar = ({changeTheme}) => {
  
   let theme = localStorage.getItem('chakra-ui-color-mode')

  return (
   <Flex color='white' p='8px'justifyContent='space-between' alignItems='end' 
   bgGradient='linear(to-r, #1f7faa,#4370ba,#6c61cc)' roundedBottomLeft='md'
   >
     
       <Box display={{base:'block',md:'none'}}> <Sidedrower/> </Box>
      <Text as='b' pl='15px'  fontSize={{base:'20px',md:'0'}}>Blackcoffer</Text>
  
    <Flex alignItems='center' w='fit-content' gap='15px' pr='10px' >

        <InputGroup size='sm' display={{base:'none',md:'flex'}} color='white'>
        <Input placeholder='Search' size='md' border='1px solid'/>
        <InputRightAddon  h='40px' border='1px solid' children={ <IoMdSearch color='black' size='40px' />} />
        </InputGroup>
        
        <Box onClick={changeTheme}>
          {
           localStorage.getItem('chakra-ui-color-mode')=='light'?<IoMdMoon size='30px'/>: <IoIosSunny size='30px'/>
          }
        </Box>

        <Box position='relative'>
        <IoIosNotificationsOutline size='40px'/>
        <Box position='absolute' color='white' top='0' textAlign='center' right='0' bg='red' as='b' w='20px' h='20px' borderRadius='50%' fontSize='12px' >3</Box>
        </Box>
      <Image bg='blackAlpha.600' w='43px' border='2px solid' borderRadius='50%' src='https://avatars.githubusercontent.com/u/103572278?s=400&u=f4788ea6bce0d750dce2b88e0c536b1d7c32a658&v=4' alt='admin' />
      <Box  display={{base:'none',md:'block'}}><IoIosKeypad  size='30px'/></Box>
    </Flex>
   </Flex>
  )
}

export default Navbar
