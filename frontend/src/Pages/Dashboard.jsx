import React from 'react';
import {Box,Flex} from '@chakra-ui/react';
import Sidebar from '../Content/Sidebar';
import AdminPage from './Admin';

const Dashboard = () => {
  return (
    <Flex justifyContent='center' alignContent='center'>
        <Box w='20%'>
        <Sidebar/>
        </Box>
         <Box w='80%' bg='#121535'  borderRadius='20px'>
         <AdminPage/>
         </Box>
    </Flex>
  )
}

export default Dashboard
