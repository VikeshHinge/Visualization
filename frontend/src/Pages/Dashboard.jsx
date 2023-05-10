import React from 'react';
import {Box,Flex} from '@chakra-ui/react';
import Sidebar from '../Content/Sidebar';
import AdminPage from './Admin';
import Navbar from '../Content/Navbar';

const Dashboard = () => {
  return (
      <Box>
     <Flex justifyContent='center' alignContent='center' gap='10px'>
        <Box w='20%' display={{base:'none',md:'block'}}>
        <Sidebar/>
        </Box>
         <Box w={{base:'100%',md:'80%' }} borderRadius='20px'>
         <AdminPage/>
         </Box>
    </Flex>
      </Box>
  )
}

export default Dashboard
