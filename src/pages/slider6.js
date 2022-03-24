import React from "react";
import Accordion from "./Accordion";




// class Accordion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: "none",
//       transform: "",
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     const newDisplay = this.state.display == "block" ? "none" : "block";
//     const newTransform =
//       this.state.transform == "rotate(180deg)" ? "" : "rotate(180deg)";
//     this.setState({
//       display: newDisplay,
//       transform: newTransform,
//     });
//   }

//   render() {
//     return (
//       <div className="accordionq">
//         <div className="accordionHeader" onClick={this.toggle}>
//           {/* <img src={this.props.accordionImage} alt="react" id="logo-image"/> */}
//           <p>{this.props.accordionTitle}</p>
//           <span
//             className="svgverde"
//             style={{ transform: this.state.transform }}
//           >
//             +
//           </span>
//         </div>
//         <div
//           className="accordionContent"
//           style={{ display: this.state.display }}
//         >
//           <p>{this.props.accordionContent}</p>
//           <p>
//             <a href={this.props.accordionLink} rel="noopener noreferrer">
//               {this.props.accordionLink}
//             </a>
//           </p>
//           <p>{this.props.accordionContent2}</p>
//           <p>{this.props.accordionContent3}</p>
//           <p>{this.props.accordionContent4}</p>
//           <p>{this.props.accordionContent5}</p>
//           <p>{this.props.accordionContent6}</p>
//           <p>{this.props.accordionContent7}</p>
//           <p>{this.props.accordionContent8}</p>
//         </div>
//       </div>
//     );
//   }
// }


// function Faq1() {
//   return (
//     <>
//       <div className="faqcontainer">
        
      
//         <div className="faqcentro">
//         <Accordion
//             accordionTitle="¿QUÉ ES UN NFT?"
//             accordionContent="Un NFT (NON FUNGIBLE TOKEN) es un ítem digital con propiedades que lo hacen único en su tipo, puede ser una pieza de arte, un dominio, una foto, una canción o bien cualquier asset digital creado en un contrato inteligente depositado en la red de blockchain. No es simplemente un .jpeg, un .png o un screenshot de algo. Partiendo del hecho de que no hay dos NFTs que sean iguales, su valor se basa en las características que hacen ese ítem más raro o diferente y el valor que la comunidad en conjunto le otorga."
//             //  accordionLink="https://google.com"
//             // accordionImage=""
//           />
//           <Accordion
//             accordionTitle="¿QUÉ ES MINTEAR?"
//             accordionContent="Mint o Mintear, es el proceso de “comprar” un NFT directamente a los creadores de la colección y ser el primer dueño de un NFT antes de que salga a cualquier marketplace de NFTs. Una vez que sale a marketplace el NFT puede ser vendido N cantidad de veces de acuerdo a la demanda del mismo."
//           />
//           <Accordion
//             accordionTitle="¿QUÉ ES UN WALLET?"
//             accordionContent="El término wallet hace referencia a una cartera, billetera o monedero virtual en el que puedes gestionar tus activos criptográficos. En cuánto actives tu Wallet, podrás hacer compras de cryptomonedas y/o almacenar e intercambiar tus NFTs."
//           />
//           <Accordion
//             accordionTitle="¿QUE HACE A LOS CEREMONIOS ESPECIALES?"
//             accordionContent="Somos una comunidad inclusiva con una propuesta muy clara para poder encontrar propuestas vanguardistas en la música, la tecnología, el arte y la cultura para diseñar y entregar experiencias físicas únicas. Los Ceremonios serán el Token que te dan acceso a privilegios de por vida."
//           />
//           <Accordion
//             accordionTitle="¿QUÉ TENGO QUE HACER PARA PODER MINTEAR?"
//             accordionContent="- Vas a necesitar una cartera de crypto, si no tienes una, te recomendamos usar Phantom Wallet, descárgala aquí >>"
//             accordionLink="https://phantom.app/download"
//             accordionContent2="- Necesitas tener SOL (Solana) en tu cartera de phantom, es muy fácil comprar pagando con tarjeta de débito o crédito desde la app."
//             accordionContent3="- Necesitas asegurar un lugar en alguna de las fases de venta."
//             accordionContent4="- Tenemos diferentes mecanismos para lograr asegurar tu lugar en Discord, sobre todo manteniéndote activo agregando valor a la comunidad."
//           />
//         </div>
//       </div>
//     </>
//   );
// }




export default function Slider6() {
	return (
    <>
    <section>
      <div className="fondo-6">
		<div className="Slider6">
      <div style={{paddingBottom:"20px !important"}} className="texto-slide-7">
    <img  style={{width:"4%", height:"4%", paddingTop: "8px"}} className="foto7"  src="https://festivalceremonia.com/img/FC2021/crmns-01.png"/>
 <h3 >INFORMACIÓN QUE CURA</h3>
 </div> 
 {/* <Faq1 className="faqcentro" /> */}
 <Accordion key="1" title="¿QUÉ ES UN NFT?" description="Un NFT (NON FUNGIBLE TOKEN) es un ítem digital con propiedades que lo hacen único en su tipo, puede ser una pieza de arte, un dominio, una foto, una canción o bien cualquier asset digital creado en un contrato inteligente depositado en la red de blockchain. No es simplemente un .jpeg, un .png o un screenshot de algo. Partiendo del hecho de que no hay dos NFTs que sean iguales, su valor se basa en las características que hacen ese ítem más raro o diferente y el valor que la comunidad en conjunto le otorga." />
				<Accordion key="2" title="¿QUÉ ES MINTEAR?" description="Mint o Mintear, es el proceso de “comprar” un NFT directamente a los creadores de la colección y ser el primer dueño de un NFT antes de que salga a cualquier marketplace de NFTs. Una vez que sale a marketplace el NFT puede ser vendido N cantidad de veces de acuerdo a la demanda del mismo." />
				<Accordion key="3" title="¿QUÉ ES UN WALLET?" description="El término wallet hace referencia a una cartera, billetera o monedero virtual en el que puedes gestionar tus activos criptográficos. En cuánto actives tu Wallet, podrás hacer compras de cryptomonedas y/o almacenar e intercambiar tus NFTs." />
				<Accordion key="4" title="¿QUE HACE A LOS CEREMONIOS ESPECIALES?" description="Somos una comunidad inclusiva con una propuesta muy clara para poder encontrar propuestas vanguardistas en la música, la tecnología, el arte y la cultura para diseñar y entregar experiencias físicas únicas. Los Ceremonios serán el Token que te dan acceso a privilegios de por vida." />
				<Accordion key="5" title="¿QUÉ TENGO QUE HACER PARA PODER MINTEAR?" description1=" - Vas a necesitar una cartera de crypto, si no tienes una, te recomendamos usar Phantom Wallet, descárgala aquí >>" link="https://phantom.app/download" description2="- Necesitas tener SOL (Solana) en tu cartera de phantom, es muy fácil comprar pagando con tarjeta de débito o crédito desde la app." description3="- Necesitas asegurar un lugar en alguna de las fases de venta." description4="- Tenemos diferentes mecanismos para lograr asegurar tu lugar en Discord, sobre todo manteniéndote activo agregando valor a la comunidad."/>
		</div>
<br/>
     
    </div>
    </section>
    
    </>
	);
}


