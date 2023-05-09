import React from 'react';
import {Box,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,Text,
    TableCaption,
    TableContainer} from '@chakra-ui/react'

const Tables = ({Region,relevance,intensity,likelihood}) => {
  
  return (
    <Box textAlign='center' w='50%'  
    border="1px solid" 
    h="200px"
    overflowY="scroll"    
    styles={{
        "::-webkit-scrollbar-track": {
          background: "red",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "red",
        },
      }} >
     <Table size='sm'>
        <Thead position='sticky' top='0' zIndex='9999' bg='#0099ff'>
        <Tr>
           <Th>Region</Th>
           <Th>Relevence</Th>
           <Th>Intensity</Th>
           <Th>Likelihood</Th>
        </Tr>
        </Thead>
        <Tbody cursor='default' >
        <Tr >
            <Td >{Region && Region.map((ele,i)=>{
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
        </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default Tables
