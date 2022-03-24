import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import "./noback.css";
import "./nftstyles.css";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import { Card, ListGroup, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Slider1 from "./slider1";
import Slider2 from './slider2';
import Slider3 from "./slider3";
import Slider4 from './slider4';
import Slider5 from "./slider5";
import Slider6 from './slider6';
import Ticker from "./ticker";
import FooterX from "./footernft";
import Ticker2 from "./ticker2";
import Ticker3 from "./ticker3";



class Menu extends React.Component {
  render() { 
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navibar").style.top = "0";
  } else {
    document.getElementById("navibar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};
    return (
      <>
      <div className="contenedornavbar">
        <div id="navibar">
          <a  href="/">
            <img
              src="https://festivalceremonia.com/img/FC2021/crmn.png"
              id="logonavbar"
              alt="logo"
            />
          </a>
          <a id="listado" href="/#cartel">
            Cartel
          </a>
          <a id="listado" href="/#videob">
            2022
          </a>
          <a id="listado" href="/#artistas">
            Artistas
          </a>
          <a id="listado" href="/#mapa">
            Lugar
          </a>
          <a id="listado" href="/#boletos">
            Boletos
          </a>
          <a id="listado"  href="/ceremonios">
            Ceremonios
          </a>
          {/* <a id="listado"  href="/faqs">
            FAQ's
          </a> */}
        
        </div>
        </div>
      </>
    );
  }
}

export default class NFT extends React.Component {
  render() {
    return (
      <>
        <Menu />
      <Slider1/>
      <Slider2/>
      <Ticker/>
      <Slider3/>
      <Ticker2/> 
      <Slider4/>
      <Ticker3/>
      <Slider5/>
      <Slider6/>
      <FooterX/> 

      </>
    );
  }
}
