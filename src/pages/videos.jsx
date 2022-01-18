import React from 'react';
import { Navbar, NavLink, Col, Row, Image, Container } from 'react-bootstrap';
import '../App.css';

const Videos = () => {
    return(
      <div className="bg">
      <Container style={{textAlign:'center'}}> 
      <div >
      <h1> &nbsp;</h1>
      <h1> &nbsp;</h1>
        <h3 className="animacion" >SEE</h3>{'\n'}
      <br />
      <iframe className="youtu" src="https://www.youtube.com/embed/videoseries?list=PLSSncSOgofg_aIbxFbXMrSlgIwX7qzLfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{textAlign:"center"}}></iframe>
      
      </div>
      </Container>
     
      <br/><br/>
      </div>
      );
};


export default Videos;