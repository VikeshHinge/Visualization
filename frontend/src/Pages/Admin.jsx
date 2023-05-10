import React,{useState,useEffect} from 'react'
import {Box,Flex} from '@chakra-ui/react'
import SectorvsLikelihood from '../Content/SectorVsLikelihood'
import SectorCard from '../Content/SectorCard';
import CountryCard from '../Content/Country';
import IntoCards from '../Content/IntoCards';
import Navbar from '../Content/Navbar';

const AdminPage = () => {
   
  return (
    <Box >
      <Navbar/>
        <IntoCards/>
        <SectorvsLikelihood/>
        <SectorCard/>
        <CountryCard/>
    </Box>
  )
}

export default AdminPage
