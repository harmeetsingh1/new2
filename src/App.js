import NavBar from './NavBar';
import NavBaw from './Navbaw';
import Home from './Home';
import Beans from './Beans';
import Gc from './Gc';
import Ic from './Ic';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
   
   <>
   <Router> 
     
     <NavBar />
     <NavBaw />
     <Routes>
     
     <Route path="/" element={<Home/>}></Route>
     <Route path="/Home" element={<Home/>}></Route>
     <Route path="/beans" element={<Beans/>}></Route>
     <Route path="/ic" element={<Ic/>}></Route>
     <Route path="/gc" element={<Gc/>}></Route>
      {/* <Beans/>
     <Ic/>
     <Gc/> */}

     </Routes> 
     
    </Router>
   </>
  
  );
}

export default App;
