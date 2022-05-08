import './App.css';
import './NavBaw.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function NavBaw() {
   
    return (
      <div id="cont2">
      <Nav defaultActiveKey="/Home" className="justify-content-center" >
   
      {/* <Nav.Item className='colo'>
      <Nav.Link >All</Nav.Link>
    </Nav.Item> */}
   
   
    <Nav.Item as="li" className='colo'>
      <Nav.Link as={NavLink} to="/beans" >Beans</Nav.Link>
    </Nav.Item>
    
   
    <Nav.Item as= "li"className='colo'>
      <Nav.Link as={NavLink} to="/ic">Instant Coffee</Nav.Link>
    </Nav.Item>
   
    <Nav.Item as="li" className='colo'>
      <Nav.Link as={NavLink} to="/gc">Ground coffee</Nav.Link>
    </Nav.Item>

  </Nav>
     </div>
    )
  }
  
  export default NavBaw