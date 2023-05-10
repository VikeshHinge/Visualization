
import './App.css';
import {Box} from '@chakra-ui/react'
import AdminPage from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Navbar from './Content/Navbar';


function App() {
  return (
     <Box bg='#C4F1F9'> 
       {/* <Navbar/> */}
       <Dashboard/>
     </Box>
  );
}

export default App;
