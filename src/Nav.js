import React, { Fragment } from "react"; 
import './App.css';
import {  NavDropdown, Container  } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Menu extends React.Component {
  render() {
    const fb = 'https://www.facebook.com/festivalceremonia/';
    const ig = 'https://www.instagram.com/festivalceremonia/';
    const tw = 'https://twitter.com/CeremoniaFest';
    const yt = 'https://www.youtube.com/user/ceremoniaxxx';
    const tt = 'https://www.tiktok.com/@festivalceremonia?language=es&sec_uid=MS4wLjABAAAAdDzPqKCUNaQJlsNn2CaOeMJ8o1yWQQzBHOo9hN29FZwCCxkjdzBJ2Vw6UIF88nnB&u_code=c7a0mai97lhgh&utm_campaign=client_share&app=musically&utm_medium=ios&user_id=270061186216505344&tt_from=copy&utm_source=copy&source=h5_m';
    
    // const email = 'mailto:octaviomrq@gmail.com'
      return(
        <Fragment style={{ margin: '0!important'}} className=" ">
      <Navbar className="navbar" expand="lg">
      <Navbar.Toggle style={{textAlign:"center"}} data-toggle="collapse" />
      <Navbar.Collapse style={{}} className=" w-100 order-1 order-md-0 dual-collapse2">
   

      <Nav.Item > <Nav.Link  href="#artistas">ARTISTAS</Nav.Link></Nav.Item>
          <Nav.Item > <Nav.Link  href="/home">ABOUT</Nav.Link></Nav.Item>

          <Nav.Item > <Nav.Link  href="/home">BOLETOS</Nav.Link></Nav.Item>



          </Navbar.Collapse>
          

       
          <Navbar.Collapse className=" justify-content-center  w-100 order-4 dual-collapse2">
          </Navbar.Collapse> 
    </Navbar>
    </Fragment>
      );
    }
  }
