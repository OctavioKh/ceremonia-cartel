import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import {Helmet} from "react-helmet";
import Footer from "./footer";

// HTML received from the server
const dirtyHTML = `
<a title="Weezevent cashless" class="weezevent-widget-integration"
 data-src="https://widget.weezevent.com/pay/335080/widgets/cc8eeddf-85cc-4cb3-8705-e4a2defb715a?lang=es" 
data-resize="1" data-width_auto="1" data-use-container="yes"  data-type="gadget">Acceder</a> 
`;

// The library allows HTML, SVG and MathML
// We only need HTML
const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
  USE_PROFILES: { html: true },
});

// // Render sanitized HTML
const Htmlo = () => <div>{parse(cleanHTML)}</div>;


export default class Registro extends React.Component {
    render() {
      return (
        <>
        <Helmet>

    <script type="text/javascript" src="https://widget.weezevent.com/weez.js"/>
    
</Helmet>
<div id="navibar">
<a href="/"><img src="https://festivalceremonia.com/img/FC2021/crmn.png" id="logonavbar" alt="logo"/>
</a>
 <a id="listado" href="/#cartel">Cartel</a>
 <a id="listado" href="/#videob">2022</a>
        <a id="listado" href="/#artistas">Artistas</a>
        <a id="listado" href="/#mapa">Lugar</a>
        <a id="listado" href="/#boletos">Boletos</a>
          <a id="listado"  href="/ceremonios">Ceremonios</a>   
          <a id="listado"  href="/registro">Reembolso</a>   
       
</div>
<h1 className="espacio" >&nbsp;</h1>
<h1 className="espacio" >&nbsp;</h1>


<table className="centrotext paddin" ><h1>REEMBOLSO CASHLESS</h1>   </table>
<h1 className="espacio" >&nbsp;</h1>
<div  style={{textAlign:"center", padding:"1rem", margin:"0 auto", backgroundColor:"white", maxWidth:'80%'}}>
<img className="slide-03-ban-imagez" src="https://festivalceremonia.com/img/FC2021/crmns-03.png"/><br/><br/>

<h3>A partir del 7 de Abril a las 11:00 hrs y <br/> hasta el 18 de Abril a las 23:59 hrs . </h3>


<h1 className="espacio" >&nbsp;</h1>
<Htmlo className="regis"/>
<br/><br/>
<h4  style={{textAlign:"center"}}  className="centrotext1 ">El costo por transacción es de $20 MXN para transferencias nacionales y $20 USD para transferencias internacionales .</h4>
<br/><br/>
<img className="slide-03-ban-imagezz" src="https://festivalceremonia.com/img/FC2021/crmns-01.png"/><br/><br/>

</div>


{/* <h1 className="espacio" >&nbsp;</h1> */}

<h1 className="espacio" >&nbsp;</h1><h1 className="espacio" >&nbsp;</h1>

<Footer/>
</>)}}