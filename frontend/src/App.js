import { useState } from 'react';
import './App.css';
import {Box} from '@chakra-ui/react'
import AdminPage from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Navbar from './Content/Navbar';


const lightmode = {backgroundColor:'#EDFDFD',color:'black'}
const darkmode = {backgroundColor:'#1a202c',color:'white'}
function App() {
  const [theme,setTheme] = useState(true)



   const changeTheme = () => {
      theme?setTheme(false):setTheme(true)
       localStorage.getItem('chakra-ui-color-mode')==='light'?localStorage.setItem('chakra-ui-color-mode','dark'):localStorage.setItem('chakra-ui-color-mode','light')
   }

  return (
      <Box className="App" transition='0.5s' style={localStorage.getItem('chakra-ui-color-mode')==='light'?lightmode:darkmode}>
       <Dashboard changeTheme={changeTheme}/>
     </Box>
  );
}

export default App;
