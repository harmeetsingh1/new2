import './App.css';
import './NavBar.css';
import './Home';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div id="cont">
    <Navbar className='nb'>
    <Container>
      
      <Navbar.Brand  as={Link} to="/home"   className="nb1">Beans Co.</Navbar.Brand>
      
    </Container>
  </Navbar>
  </div>
  )
}

export default NavBar
