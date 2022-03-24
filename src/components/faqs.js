import React from "react";
import FooterX from "../pages/footernft";




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
      
        <div id="navibar">
          <a href="/">
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
          <a id="listado" href="/ceremonios">
            Ceremonios
          </a>
          <a id="listado" href="/faqs">
            FAQs
          </a>
        </div>
      </>
    );
  }
}

class VideoCartel1 extends React.Component {
  render() {
    return (
      <>
        <div className="video-containerp">
          <iframe
            src="https://www.youtube.com/embed/aCQitOMyNXA"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  }
}



class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      transform: "",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const newDisplay = this.state.display == "block" ? "none" : "block";
    const newTransform =
      this.state.transform == "rotate(180deg)" ? "" : "rotate(180deg)";
    this.setState({
      display: newDisplay,
      transform: newTransform,
    });
  }

  render() {
    return (
      <div className="accordionq">
        <div className="accordionHeader" onClick={this.toggle}>
          {/* <img src={this.props.accordionImage} alt="react" id="logo-image"/> */}
          <p>{this.props.accordionTitle}</p>
          <span
            className="svgverde"
            style={{ transform: this.state.transform }}
          >
            +
          </span>
        </div>
        <div
          className="accordionContent"
          style={{ display: this.state.display }}
        >
          <p>{this.props.accordionContent}</p>
          <p>
            <a href={this.props.accordionLink} rel="noopener noreferrer">
              {this.props.accordionLink}
            </a>
          </p>
          <p>{this.props.accordionContent2}</p>
          <p>{this.props.accordionContent3}</p>
          <p>{this.props.accordionContent4}</p>
          <p>{this.props.accordionContent5}</p>
          <p>{this.props.accordionContent6}</p>
          <p>{this.props.accordionContent7}</p>
          <p>{this.props.accordionContent8}</p>
        </div>
      </div>
    );
  }
}

function Texto() {
  return (
    <>
      <div className="centrodiv">
        <table className="centrotext">
          <h1>GUÍA OFICIAL</h1>   <img
              src="https://festivalceremonia.com/ceremonixs-01.png"
              id="cxmon"
              alt="logo"
            />
        </table>
        <br />
      </div>
      <br />
      <div className="centrodiv">
        
        <table className="centrotext">
          <h6>Prepárate para obtener tu Ceremonio en 3 sencillos pasos:</h6>
        </table>
        <div className="lista1">
          <ol className="olista">
            <li className="centrotext1 listal">
              Descarga y registra tu Crypto Wallet (Phantom App){" "}
              <a href="https://phantom.app/download" rel="noopener noreferrer">
                {" "}
                https://phantom.app/download
              </a>{" "}
            </li>
            <li className="centrotext1 listal">
              Dentro de Phantom Wallet compra Solana usando Moonpay o bien,
              transfiere tu Crypto desde otras wallets como Binance.
            </li>
            <li className="centrotext1 listal">
              Únete al Discord Oficial de Festival Ceremonia para estar
              pendiente de dinámicas y updates.
            </li>
          </ol>
        
        </div>
      </div>
   
      <VideoCartel1 />
      <div className="centrodiv">
        <table className="centrotext">
          <h6>
            Y si tienes duda en todas las nuevas palabras que encuentras en este
            Crypto mundo, consulta el siguiente glosario que hemos preparado:
          </h6>
        </table>
      </div>
    </>
  );
}

function Faq1() {
  return (
    <>
      <div className="faqcontainer">
        <div className="centrodiv">
          <table className="centrotext3">
            <h3>Glosario:</h3>
          </table>
        </div>
        <br />
        <div className="faqcentro">
          <Accordion
            accordionTitle="Blockchain"
            accordionContent="Se traduce como cadena de bloques. Básicamente, blockchain es un conjunto de tecnologías que permiten llevar un registro seguro, descentralizado, sincronizado y distribuido de las operaciones digitales, sin necesidad de la intermediación de terceros. En ese sentido, la definición más completa es la dada por Don & Alex Tapscott en su libro Blockchain Revolution: “un libro de contabilidad digital incorruptible de transacciones económicas que se puede programar para registrar no solo transacciones financieras, sino prácticamente todo lo que tiene valor»."
            //  accordionLink="https://google.com"
            // accordionImage=""
          />
          <Accordion
            accordionTitle="Blockchain Solana"
            accordionContent="Es una plataforma pública de blockchain con funcionalidad de contrato inteligente. Su criptomoneda nativa es SOL. Solana ofrece tiempos de transacción más rápidos y costos más bajos que su principal competidor, Ethereum. "
          />
          <Accordion
            accordionTitle="Colección de NFTs ó NFT Collection"
            accordionContent="Son todos los elementos que son creados y puestos a disponibilidad para un proyecto."
          />
          <Accordion
            accordionTitle="ETH"
            accordionContent="Es la abreviación de la criptomoneda Ethereum, es una de las más conocidas. En este momento hemos decidido NO utilizar la blockchain de ETH por un tema de democratizar los alcances del proyecto."
          />
          <Accordion
            accordionTitle="Flipear"
            accordionContent="Es una forma de hacer dinero con NFTs utilizándolos como assets o herramientas de inversión. El juego es sencillo, compras un NFT a un valor bajo y lo vendes cuando el mercado esté dispuesto a pagar más, con el objetivo de recuperar tu inversión y poder obtener cierta utilidad"
          />
          <Accordion
            accordionTitle="Floor Price o FP"
            accordionContent="Es el precio mínimo en el que puedes comprar un NFT de una colección, lo que también afecta la apreciación general de la colección misma."
          />
          <Accordion
            accordionTitle="GAS o GAS FEE"
            accordionContent="Es un cargo adicional al precio del NFT que se paga a la red transaccional encargada de procesar la compra."
          />
          <Accordion
            accordionTitle="Mint o Mintear"
            accordionContent="Es el proceso de “comprar” un NFT directamente a los creadores de la colección y ser el primer dueño de un NFT antes de que salga a cualquier marketplace de NFTs. Una vez que sale a marketplace el NFT puede ser vendido N cantidad de veces de acuerdo a la demanda del mismo."
          />
          <Accordion
            accordionTitle="NFT - Non Fungible Token"
            accordionContent="Un NFT (NON FUNGIBLE TOKEN) es un ítem digital con propiedades que lo hacen único en su tipo, puede ser una pieza de arte, un dominio, una foto, una canción o bien cualquier asset digital creado en un contrato inteligente depositado red de blockchain. No es simplemente un .jpeg, un .png o un screenshot de algo. Partiendo del hecho de que no hay dos NFTs que sean iguales, su valor se basa en las características que hacen ese ítem más raro o diferente y el valor que la comunidad en conjunto le otorga. "
          />
          <Accordion
            accordionTitle="Roadmap"
            accordionContent="En NFTs es el plan general de acción con el planteamiento de objetivos que persigue alcanzar el proyecto. Puede ser tan ambiguo o tan preciso de acuerdo al proyecto."
          />

          <Accordion
            accordionTitle="SOL"
            accordionContent="Es la abreviación de la criptomoneda SOLANA, es la que criptomoneda con la que podrás comprar tu Ceremonio."
          />
          <Accordion
            accordionTitle="Supply"
            accordionContent="Es la cantidad de NFTs o activos digitales que conforman un proyecto de NFTs.\"
          />
          <Accordion
            accordionTitle="Wallet"
            accordionContent="Cartera en la que guardas o depositas tus activos crypto (criptomonedas). En el caso de nuestro proyecto deberás descargar y abrir una cuenta en Phantom Wallet :"
            accordionLink="https://phantom.app/download"
          />
          <Accordion
            accordionTitle="WL"
            accordionContent="Whitelist significa que se obtiene el privilegio de comprar un NFT a un precio de pre-venta, por lo que en el momento de que haya venta pública, si minteaste un NFT, tu NFT valdrá más de lo que invertiste en él."
          />
        </div>
      </div>
    </>
  );
}

function Faq2() {
  return (
    <>
    
    
      <div className="faqcontainer">
        <div className="centrodiv">
          <table className="centrotext3">
            <h3>FAQ's</h3>
          </table>
        </div>
        <br />
        <div className="faqcentro">
          <Accordion
            accordionTitle="¿Qué son los NFTs?"
            accordionContent="Un NFT (NON FUNGIBLE TOKEN) es un ítem digital con propiedades que lo hacen único en su tipo, puede ser una pieza de arte, un dominio, una foto, una canción o bien cualquier asset digital creado en un contrato inteligente depositado red de blockchain. No es simplemente un .jpeg, un .png o un screenshot de algo. Partiendo del hecho de que no hay dos NFTs que sean iguales, su valor se basa en las características que hacen ese ítem más raro o diferente y el valor que la comunidad en conjunto le otorga."
            //  accordionLink="https://google.com"
            // accordionImage=""
          />
          <Accordion
            accordionTitle="¿Cómo se pagan?"
            accordionContent="Dándote de alta en una Crypto Wallet y comprando criptomonedas en ella. Cada marketplace de NFTs trabaja con diferentes criptomonedas. Los Ceremonios trabajan con “Solana”, la cual puedes adquirir vía Moonpay desde tu Phantom Wallet."
          />
          <Accordion
            accordionTitle="¿Qué es una criptomoneda?"
            accordionContent="Una criptomoneda, criptodivisa o cripto activo es un medio digital de intercambio que utiliza criptografía fuerte para asegurar las transacciones, controlar la creación de unidades adicionales y verificar la transferencia de activos usando tecnologías de registro distribuido."
          />
          <Accordion
            accordionTitle="¿Qué plataformas recomiendan usar para comprar criptomonedas?"
            accordionContent="Existe una amplia oferta de aplicaciones y wallets para comprar criptomonedas, sin embargo los Ceremonios pueden ser adquiridos vía Solana en Phantom Wallet."
          />
          <Accordion
            accordionTitle="¿Cuáles son los tipos de cambio?"
            accordionContent="El tipo de cambio cambia a diario, te recomendamos revisar constantemente."
          />
          <Accordion
            accordionTitle="¿Dónde debo registrar mi boleto 2020?"
            accordionContent="En el siguiente Google Forms"
            accordionLink="https://forms.gle/3XzjVvwPL68Zox2M8"
          />
          <Accordion
            accordionTitle="¿Qué información del boleto debo registrar?"
            accordionContent="Los 12 dígitos que están al costado del código de barras de tu boleto 2020."
          />
          <Accordion
            accordionTitle="¿Cuáles son los beneficios de los Ceremonios?"
            accordionContent="- Pases Vitalicios"
            accordionContent2="- Hospitality"
            accordionContent3="- Merch"
            accordionContent4="- Licuachelas"
            accordionContent5="- Cervezas"
            accordionContent6="- Derecho de compra de boleto a precio especial de por vida"
            accordionContent7="- Acceso a colecciones futuras de NFTs"
            accordionContent8="- Y muchos beneficios sorpresa más…"
          />
          <Accordion
            accordionTitle="¿Cuál es el precio de los Ceremonios?"
            accordionContent="0.6 Solanas."
          />
        </div>
      </div>

    </>
  );
}

export default class FaqPage extends React.Component {
  render() {
    return (
      <>
      <div className="backfaq">
      <Menu />
        <h1 className="espacio">&nbsp;</h1>

        <h1 className="espacio">&nbsp;</h1>
        <Texto />
        <Faq1 className="faqcentro" />
        <Faq2 className="faqcentro" />
      </div>
       

        <FooterX />
      </>
    );
  }
}
