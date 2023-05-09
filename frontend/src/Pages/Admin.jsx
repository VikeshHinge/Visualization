import React,{useState,useEffect} from 'react'
import {Box,Flex} from '@chakra-ui/react'
import SectorvsLikelihood from '../Content/SectorVsLikelihood'
import One from '../Content/One';
import PieChart from '../Content/two';
import SectorCard from '../Content/SectorCard';
import CountryCard from '../Content/Country';

const AdminPage = () => {
   
  return (
    <Box p='5px'>
        <SectorvsLikelihood/>
        <SectorCard/>
        {/* <Flex>
        <One Sectors={'Financial services'} Country={'China'}/>
        <PieChart Country={'China'}/>
        </Flex> */}
        <CountryCard/>
    </Box>
  )
}

export default AdminPage
