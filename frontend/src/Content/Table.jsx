import React from 'react';
import {Box,Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,Text} from '@chakra-ui/react'

const Tables = ({Region,relevance,intensity,likelihood}) => {
  
  return (
    <Box textAlign='center' w={{base:'100%',md:'50%' }} 
    border="1px solid" 
    h="250px"
    overflowY='scroll'
    >
     <Table size='sm'>
        <Thead position='sticky' top='0' zIndex='9999' bg='#0099ff'>
        <Tr>
           <Th w='300px'>Region</Th>
           <Th>Relevence</Th>
           <Th>Intensity</Th>
           <Th>Likelihood</Th>
        </Tr>
        </Thead>
        <Tbody cursor='default' >
          
           <Td w='300px' >{Region && Region.map((ele,i)=>{
              return<Text key={i}>{ele}</Text>
            })}</Td>

             <Td>{relevance && relevance.map((ele,i)=>{
               return<Text key={i}>{ele}</Text>
            })}</Td>

             <Td>{intensity && intensity.map((ele,i)=>{
              return<Text arseFloat key={i}>{ele}</Text>
             })}</Td>

              <Td>{likelihood && likelihood.map((ele,i)=>{
               return<Text key={i}>{ele}</Text>
              })}</Td>
       
        </Tbody>
      </Table>
    </Box>
  )
}

export default Tables
