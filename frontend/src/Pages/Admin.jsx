import React,{useState,useEffect} from 'react'
import {Box,Flex} from '@chakra-ui/react'
import SectorvsLikelihood from '../Content/SectorVsLikelihood'
import SectorCard from '../Content/SectorCard';
import CountryCard from '../Content/Country';
import IntoCards from '../Content/IntoCards';
import Navbar from '../Content/Navbar';
import axios from 'axios';

const AdminPage = ({changeTheme }) => {
 
const [Data,setData] = useState([])

  useEffect(()=>{
    
    const getData= async() => {
      let {data:{Data}} = await axios.get('https://drab-ruby-sparrow-tutu.cyclic.app/data')
      setData(Data)
    }

    getData()
  },[])
   
  return (
    <Box pb='50px'>
      <Navbar changeTheme={changeTheme} />
      <Box mt='10px'>
      <IntoCards Data={Data} />
        <SectorvsLikelihood Data={Data}/>
        <SectorCard Data={Data}/>
        <CountryCard Data={Data}/>
      </Box>
    </Box>
  )
}

export default AdminPage
