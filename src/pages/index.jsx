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

// import MailchimpSubscribe from "react-mailchimp-subscribe";

class Banner extends React.Component {
  render() {
    return (
            <div className="banner" >
              <img
                alt="Cartel Ceremonia 2022"
                className="banner_img"
                src="https://festivalceremonia.com/img/FC2021/CRMN22_Lineup_01.png"
              />
            </div>
    );
  }
}

class VideoCartel extends React.Component {
  render() {
    return (
      <div className="videoWrapper">
      <iframe 
         width="100%"
         height="698px" 
         src="https://www.youtube.com/embed/FTzpFMjfDxM?modestbranding=1&rel=0&showinfo=0&controls=0"
         frameBorder="0"
         allowFullScreen></iframe>
         <img src={strip} className="strip"/>
  </div>
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
        <Banner />
        <VideoCartel />
        <Artistas/>
        <Boletos/>
        <Venue/>
       
        <Sponsors/>
        <Footer/>
      </>
    );
  }
}

export default MainPage;
