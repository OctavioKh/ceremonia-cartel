import React from "react";

export default class Slider1 extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="fondo-1">
            <div className="slide-01-txt1">
              <div className=""><img className="logocere" src="https://festivalceremonia.com/img/FC2021/ceremonios-01.png" alt="ceremonios"/></div>
            </div>
            <div className="slide-01-txt2">
              <div>
                LA COLECCIÓN OFICIAL DE NFTS DE
                <br /> FESTIVAL CEREMONIA 2022
              </div>
            </div>
            
            <div className="slide-01-btndiv">
              <button type="button" className="slide-01-btn" target="_blank">
                <a className="boton01" rel="noopener noreferrer" href="https://discord.gg/RUANEmyasF">ÚNETE A DISCORD</a>
              </button>
            </div>
 <div className="slide-01-btndiv2">
              <button type="button" className="slide-01-btn2" target="_blank">
                <a className="boton012" rel="noopener noreferrer" href="https://ceremonia.neefter.com"> M  I  N  T</a>
              </button>
            </div> 

            <div className="slide-01-btndiv2">
              <button type="button" className="slide-01-btn3" target="_blank">
                <a className="boton013" rel="noopener noreferrer" href="/faqs">FAQ's</a>
              </button>
            </div> 

             <div className="slide-01-btndiv2">
              <button type="button" className="slide-01-btn4" target="_blank">
                <a className="boton014" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1pEUft24vk6ASOOrMjwgsSJ5OboSLdxGh/edit#gid=27401998">BENEFICIOS</a>
              </button>
            </div>  
          </div>
        </section>
      </>
    );
  }
}
