import React from "react";
import Accordion from "./Accordion";

// const faq = [
// 	{
// 		"question": "¿QUÉ ES UN NFT?",
// 		"answer": "Un NFT (NON FUNGIBLE TOKEN) es un ítem digital con propiedades que lo hacen único en su tipo, puede ser una pieza de arte, un dominio, una foto, una canción o bien cualquier asset digital creado en un contrato inteligente depositado en la red de blockchain. No es simplemente un .jpeg, un .png o un screenshot de algo. Partiendo del hecho de que no hay dos NFTs que sean iguales, su valor se basa en las características que hacen ese ítem más raro o diferente y el valor que la comunidad en conjunto le otorga."
// 	},
// 	{
// 		"question": "¿QUÉ ES MINTEAR?",
// 		"answer": "Mint o Mintear, es el proceso de “comprar” un NFT directamente a los creadores de la colección y ser el primer dueño de un NFT antes de que salga a cualquier marketplace de NFTs. Una vez que sale a marketplace el NFT puede ser vendido N cantidad de veces de acuerdo a la demanda del mismo."
// 	},
// 	{
// 		"question": "¿QUÉ ES UN WALLET?",
// 		"answer": "El término wallet hace referencia a una cartera, billetera o monedero virtual en el que puedes gestionar tus activos criptográficos. En cuánto actives tu Wallet, podrás hacer compras de cryptomonedas y/o almacenar e intercambiar tus NFTs."
// 	},
//   {
// 		"question": "¿QUE HACE A LOS CEREMONIOS ESPECIALES?",
// 		"answer": "Somos una comunidad inclusiva con una propuesta muy clara para poder encontrar propuestas vanguardistas en la música, la tecnología, el arte y la cultura para diseñar y entregar experiencias físicas únicas. Los Ceremonios serán el Token que te dan acceso a privilegios de por vida."
// 	},
//   {
// 		"question": "¿QUÉ TENGO QUE HACER PARA PODER MINTEAR?",
// 		"answer": [" - Vas a necesitar una cartera de crypto, si no tienes una, te recomendamos usar Phantom Wallet, descárgala aquí https://phantom.app/download ", "- Necesitas tener SOL (Solana) en tu cartera de phantom, es muy fácil comprar pagando con tarjeta de débito o crédito desde la app.", "- Necesitas asegurar un lugar en alguna de las fases de venta.", "- Tenemos diferentes mecanismos para lograr asegurar tu lugar en Discord, sobre todo manteniéndote activo agregando valor a la comunidad."]
// 	}
// ]

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
 <div className="faqs" >
				<Accordion key="1" title="¿QUÉ ES UN NFT?" description="Un NFT (NON FUNGIBLE TOKEN) es un ítem digital con propiedades que lo hacen único en su tipo, puede ser una pieza de arte, un dominio, una foto, una canción o bien cualquier asset digital creado en un contrato inteligente depositado en la red de blockchain. No es simplemente un .jpeg, un .png o un screenshot de algo. Partiendo del hecho de que no hay dos NFTs que sean iguales, su valor se basa en las características que hacen ese ítem más raro o diferente y el valor que la comunidad en conjunto le otorga." />
				<Accordion key="2" title="¿QUÉ ES MINTEAR?" description="Mint o Mintear, es el proceso de “comprar” un NFT directamente a los creadores de la colección y ser el primer dueño de un NFT antes de que salga a cualquier marketplace de NFTs. Una vez que sale a marketplace el NFT puede ser vendido N cantidad de veces de acuerdo a la demanda del mismo." />
				<Accordion key="3" title="¿QUÉ ES UN WALLET?" description="El término wallet hace referencia a una cartera, billetera o monedero virtual en el que puedes gestionar tus activos criptográficos. En cuánto actives tu Wallet, podrás hacer compras de cryptomonedas y/o almacenar e intercambiar tus NFTs." />
				<Accordion key="4" title="¿QUE HACE A LOS CEREMONIOS ESPECIALES?" description="Somos una comunidad inclusiva con una propuesta muy clara para poder encontrar propuestas vanguardistas en la música, la tecnología, el arte y la cultura para diseñar y entregar experiencias físicas únicas. Los Ceremonios serán el Token que te dan acceso a privilegios de por vida." />
				<Accordion key="5" title="¿QUÉ TENGO QUE HACER PARA PODER MINTEAR?" description1=" - Vas a necesitar una cartera de crypto, si no tienes una, te recomendamos usar Phantom Wallet, descárgala aquí >>" link="https://phantom.app/download" description2="- Necesitas tener SOL (Solana) en tu cartera de phantom, es muy fácil comprar pagando con tarjeta de débito o crédito desde la app." description3="- Necesitas asegurar un lugar en alguna de las fases de venta." description4="- Tenemos diferentes mecanismos para lograr asegurar tu lugar en Discord, sobre todo manteniéndote activo agregando valor a la comunidad."/>

     </div>
		</div>
    </div>
    </section>
    </>
	);
}


