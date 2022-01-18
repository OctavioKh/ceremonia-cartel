import React from "react";
// import { Container } from "react-bootstrap";
// import CasaPage from "./home.jsx";
// import "../index.css";
import banner1 from "../assets/images/CRMN-WEB-STD_05.PNG";
import Artistas from "../components/artistas";
// import Demo from "../Mailchimp.jsx";
import Boletos from "../components/boletos";
import Footer from "../components/footer";
import Venue from "../components/venue";
// import Menu from "../Nav.js";

// import MailchimpSubscribe from "react-mailchimp-subscribe";

class Banner extends React.Component {
  render() {
    return (
            <div className="banner" >
              <img
                alt="Cartel Ceremonia 2022"
                className="banner_img"
                src="https://festivalceremonia.com/upload/04/CRMN20_CartelFinal_CitiBanamex_Hor_V6.png"
              />
            </div>
    );
  }
}

class VideoCartel extends React.Component {
  render() {
    return (
      <div class="videoWrapper">
      <iframe 
         width="100%"
         height="698px" 
         src="https://www.youtube.com/embed/C0DPdy98e4c?modestbranding=1&rel=0&showinfo=0&controls=0"
         frameborder="0"
         allowfullscreen></iframe>
  </div>
    );
  }
}



// class Navbar extends React.Component{
//   render() {
//       return (        <div class="menu-wrap">
//         <input type="checkbox" class="toggler"/>
//         <div class="hamburger"><div></div></div>
//         <div class="menu">
//           <div>
//             <div>
//               <ul>
//                 <li><a href="https://gmail.com">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Services</a></li>
//                 <li><a href="#">Contact</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>);
//   }
// }

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
        <Banner />
        <VideoCartel />
        <Artistas/>
        <Boletos/>
        <Venue/>
        <Footer/>
      </>
    );
  }
}

export default MainPage;
