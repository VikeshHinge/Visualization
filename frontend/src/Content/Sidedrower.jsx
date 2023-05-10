import React,{useState,useEffect} from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,Button,useDisclosure,Text
  } from '@chakra-ui/react'

  import { GoFileMedia,GoHome,GoSettings,GoGear,GoTasklist,GoX ,GoListUnordered} from "react-icons/go";

const Sidedrower = () => {
  
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }



  return (
    <Box>
   
      <Box position='absolute' top='10px' left='15px' display={{base:'block',md:'none'}}>
      <GoListUnordered
        size='35px'
        onClick={() => handleClick(size)}
      />
      </Box>

       <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} p='0'>
        <DrawerOverlay />
        <DrawerContent bg='transpernt' w='100px'>
         
          <DrawerBody>
   
    <Box onClick={onClose} bg='#121535' w='80px' position='absolute' top='0' left='0' h='100vh' color='gray'>
    <Box p='5px' pl='15px' mt='10px' ><GoX size='30px'/> </Box>
    <hr />
    <Box mt='10px' p='5px'pl='15px' ><GoHome size='30px'/> </Box>
    <Box mt='10px' p='5px'pl='15px' ><GoFileMedia size='30px'/> </Box>
    <Box mt='10px' p='5px'pl='15px' > <GoSettings size='30px'/></Box>
    <Box mt='10px' p='5px'pl='15px' ><GoTasklist size='25px'/> </Box>
    <Box mt='10px' p='5px'pl='16px' ><GoGear size='25px'/> </Box>
   </Box>
  
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  </Box>
  )
}

export default Sidedrower;
