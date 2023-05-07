
import './App.css';
import {Box} from '@chakra-ui/react'
import AdminPage from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Navbar from './Content/Navbar';


function App() {
  return (
     <Box bg='#16193c' color='white'> 
       <Navbar/>
       <Dashboard/>
     </Box>
  );
}

export default App;
