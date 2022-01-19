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


{/*
<header className="video-header">

  <video id="backgroundy" playsInLine="playsinline" autoPlay="autoplay" muted="muted" loop="loop"
  data-wf-ignore="true" data-object-fit="cover" onContextMenu="return false" preload="auto"
    source src="https://festivalceremonia.com/video/back.mp4" type="video/mp4">
  </video>

  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 ">
       
       
      </div>
    </div>
  </div>
</header>

*/}



{/*

<header className="video-header">
<video autoPlay="" loop="loop" muted id="backgroundy" poster="/74e07bea4d9cadb282d9.jpg" playsInLine="" data-wf-ignore="true" data-object-fit="cover" onContextMenu="return false" preload="auto">
<source src="/video/back.mp4" type="video/mp4"/>
<source src="/video/back.webm" type="video/webm"/>
<source src="/video/back.ogv" type="video/ogg"/>
</video>
</header>


      <header className="video-header">
      <video autoPlay="autoplay" loop="loop" muted id="backgroundy" poster={backpic} defaultMuted playsInline  data-wf-ignore="true" data-object-fit="cover" onContextMenu="return false;"  preload="auto">
      <source src={backgroundVideoMp4} type="video/mp4"/>
   <source src={backgroundVideoWebm} type="video/webm"/>
   <source src={backgroundVideoOgv} type="video/ogg"/>
</video>
  </header> */}
      <App />      

      <header class="video-header">



<video
          
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          playsInline
          loop
          poster={"/74e07bea4d9cadb282d9.jpg"}
        > 
        <source src="/video/back.mp4" type="video/mp4"/>
        <source src="/video/back.webm" type="video/webpm"/></video>
 
 </header>    
    </React.StrictMode> ,
    document.getElementById('root')
  );
  

//const getUserModule = () =>
////  import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");
  
//const btn = document.getElementById("btn");

//btn.addEventListener("click", () => {
  //getUserModule().then(({ getUsers }) => {
    //getUsers().then(json => console.log(json));
//  });
//});


