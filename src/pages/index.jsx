import React from "react";
// import { Container } from "react-bootstrap";
// import CasaPage from "./home.jsx";
// import "../index.css";
import banner1 from "../assets/images/CRMN-WEB-STD_05.PNG";
import Artistas from "../components/artistas";
// import Demo from "../Mailchimp.jsx";
import Boletos from "../components/boletos";
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import Venue from "../components/venue";
// import Menu from "../Nav.js";
import strip from "../assets/images/strip01.png";
import Dashboard from "../components/dashboard";
 import "./script1";
import 'bootstrap/dist/css/bootstrap.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
}
    


   

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos || currentScrollPos == 0) {
//     document.getElementById("navibar").style.top = "0";
//   } else {
//     document.getElementById("navibar").style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// }

  
      return(


        
<>
<div id="navibar">
<a><img src="https://festivalceremonia.com/img/FC2021/crmn.png" id="logonavbar" alt="logo"/>
</a>
 <a id="listado" href="#cartel">Cartel</a>
 <a id="listado" href="#videob">2022</a>
        <a id="listado" href="#artistas">Artistas</a>
        <a id="listado" href="#mapa">Lugar</a>
        <a id="listado" href="#boletos">Boletos</a>
          <a id="listado"  href="/ceremonios">Ceremonios</a>   

         {/* <a id="listado" href="#cartel">Cartel</a>
 <a id="listado" href="#videob">2022</a>
        <AnchorLink id="listado" href="#artistas">Artistas</AnchorLink>
        <AnchorLink id="listado" href="#mapa">Lugar</AnchorLink>
        <AnchorLink id="listado" href="#boletos">Boletos</AnchorLink> */}
</div>
       </>
      );
    }
  }


// import MailchimpSubscribe from "react-mailchimp-subscribe";

class Banner extends React.Component {
  render() {
    return (
            <div className="banner" >
              <img
                alt="Cartel Ceremonia 2022"
                className="banner_img"
                src="https://festivalceremonia.com/img/FC2021/CRMN22-02.png"
              />
            </div>
    );
  }
}

class VideoCartel extends React.Component {
  render() {
    return (<>
      <div className="videoWrapper">
      <iframe 
         width="100%"
         height="100%" 
         src="https://www.youtube.com/embed/gCD_tT6AVDg?&rel=0&showinfo=0&controls=0"
         frameBorder="0"
         allowFullScreen></iframe>
        
  </div>
   <img src={strip} className="strip"/>
   </>
    );
  }
}


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("El Email:" + this.state.value + "ha sido registrado");
    event.preventDefault();
  }
  render() {
    return (
      <>
      <div className="animate__animated animate__fadeIn">
      {/* <h1 style={{backgroundColor:"#fff"}}>hoes</h1> */}

        <div>
          <Menu/>
          <div className="all-content" >
            <div id="cartel">
            <Banner />
            </div>
        
      <div id="videob">
      <VideoCartel  />
      </div>
        

        <div id="artistas">
        <Artistas  />
        </div>
        
        <div id="boletos">
           <Boletos /> 
           </div>
       <div  id="mapa">
       <Venue/>   </div>
        
        <Sponsors/>
        <Footer/>
          </div>
        </div>
        
      </div>
       
        
      </>
    );
  }
}

export default MainPage;
