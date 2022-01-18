import React from "react"; 
import {  NavDropdown, Container  } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Menu extends React.Component {
  render() {
    const ig = 'https://www.instagram.com/phy__sis/';
    const fb = 'https://www.facebook.com/physis.2020/';
    const email = 'mailto:octaviomrq@gmail.com'
      return(
        <Container style={{ margin: '0!important'}} className="body container1">
      <Navbar className="navbar" expand="lg w-100">
      <Navbar.Toggle data-toggle="collapse" data-target=".dual-collapse2"/>
      <Navbar.Collapse style={{}} className=" w-100 order-1 order-md-0 dual-collapse2">
        <Nav className=""  >
          <Nav.Item>
          <Nav.Link href="/videos">See</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/music">Listen</Nav.Link>
          </Nav.Item>
        
          </Nav >
          </Navbar.Collapse>
          

          <Nav.Item className="logo alignCenter ml-auto"> <Nav.Link className="animacion" href="/home">PHYSIS</Nav.Link></Nav.Item>

          <Navbar.Collapse className=" justify-content-center  w-100 order-4 dual-collapse2">
          <Nav className="w-100 justify-content-end" /*justify-content-end justify-content-center  w-100 nav-justified */  >

          <NavDropdown alignRight style={{backgroundColor: 'rgba(0,0,0,0.0)', color: 'black'}} class="fa fa-plus" class="dropdown-menu-right" id="collasible-nav-dropdown">
            <NavDropdown.Item style={{backgroundColor: 'rgba(0,0,0,0.0)'}} className="text-center" href={ig} target="_blank" ><i class="fa fa-instagram"></i> Instagram</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor: 'rgba(0,0,0,0.0)'}} className="text-center" href={fb} target="_blank" ><i class="fa fa-facebook"></i> Facebook</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor: 'rgba(0,0,0,0.0)'}} className="text-center" href={email} target="_blank"><i class="fa fa-envelope"></i> Mail</NavDropdown.Item>
          </NavDropdown>
          
           </Nav>
          </Navbar.Collapse> 
    </Navbar>
    </Container>
      );
    }
  }
