import React from 'react';
import { IoIosNotificationsOutline,IoIosKeypad, IoMdSearch,IoIosSunny} from "react-icons/io";
import {Box,Flex,Image,Text,InputGroup,Input,InputRightAddon} from '@chakra-ui/react'

const Navbar = () => {
  return (
   <Flex p='5px'justifyContent='space-between' alignItems='center' >
    <Text as='b' fontSize='30px'>Blackcoffer</Text>
    <Flex alignItems='center' w='fit-content' gap='10px' pr='10px'>

        <InputGroup size='sm' >
        <Input placeholder='Search' size='md' border='1px solid'/>
        <InputRightAddon  h='40px' border='1px solid' children={ <IoMdSearch color='black' size='40px' />} />
        </InputGroup>
        
        <IoIosSunny size='45px'/>

        <Box position='relative'>
        <IoIosNotificationsOutline size='40px'/>
        <Box position='absolute' color='white' top='0' textAlign='center' right='0' bg='red' as='b' w='20px' h='20px' borderRadius='50%' fontSize='12px' >3</Box>
        </Box>
      <Image bg='blackAlpha.600' w='43px' border='2px solid' borderRadius='50%' src='https://avatars.githubusercontent.com/u/103572278?s=400&u=f4788ea6bce0d750dce2b88e0c536b1d7c32a658&v=4' alt='admin' />
      <IoIosKeypad size='38px'/>
    </Flex>
   </Flex>
  )
}

export default Navbar
