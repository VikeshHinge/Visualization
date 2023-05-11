import React from 'react';
import {Box,Flex} from '@chakra-ui/react';
import Sidebar from '../Content/Sidebar';
import AdminPage from './Admin';

const Dashboard = ({changeTheme}) => {



  return (
      <Box>
     <Flex justifyContent='center' alignContent='center' gap='10px'>
        <Box w='20%' display={{base:'none',md:'block'}}>
        <Sidebar/>
        </Box>
         <Box w={{base:'100%',md:'80%' }} borderRadius='20px'>
         <AdminPage changeTheme={changeTheme}/>
         </Box>
    </Flex>
      </Box>
  )
}

export default Dashboard
