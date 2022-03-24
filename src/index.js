import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import backgroundVideoMp4 from './assets/videos/back.mp4';
import backgroundVideoWebm from './assets/videos/back.webm';
import backgroundVideoOgv from './assets/videos/back.ogv';
import backpic from './assets/videos/back.jpg'



ReactDOM.render(
    <React.StrictMode>
      <App />      

      <header className="video-header" id="video-header">
        <div id="video-nft vidx">
        <video   
src="/video/back.mp4"
          muted
          autoPlay={"autoplay"}
          preload="auto"
          playsInline
          loop
          poster={"/74e07bea4d9cadb282d9.jpg"}
        > 
        <source id="video-nft" src="/video/back.mp4" type="video/mp4"/>
        <source id="video-nft" src="/video/back.webm" type="video/webpm"/></video>
        </div>

 </header>    
    </React.StrictMode> ,
    document.getElementById('root')
  );
  

