import React from "react";

export default class Slider1 extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="fondo-1">
            <div className="slide-01-txt1">
              <div className="">CEREMONIOS</div>
            </div>
            <div className="slide-01-txt2">
              <div>
                LA COLECCIÓN OFICIAL DE NFTS DE
                <br /> FESTIVAL CEREMONIA 2022
              </div>
            </div>
            
            <div className="slide-01-btndiv">
              <button type="button" className="slide-01-btn" target="_blank">
                <a className="boton01" href="https://discord.gg/RUANEmyasF">ÚNETE A DISCORD</a>
              </button>
            </div>

            {/* <div className="slide-01-btndiv2">
              <button type="button" className="slide-01-btn2" target="_blank">
                <a className="boton012" href="https://ceremonia.neefter.com">M  I  N  T</a>
              </button>
            </div> */}
          </div>
        </section>
      </>
    );
  }
}
