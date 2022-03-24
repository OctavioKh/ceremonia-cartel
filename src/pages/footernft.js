import React from "react";

export default class FooterX extends React.Component {
  render() {
    return (
      <>
        {" "}
        <section className="fondo-negro">
        <div id="footerx">
          <div className="footernft fondo-negro">
            <p>
              {/* <a className="pill-btn1 socialz" href="#">
                SMART CONTRACT
              </a>{" "} */}
              <a className="pill-btn2 socialz" href="/">
                FESTIVAL CEREMONIA
              </a>{" "}
              <a className="pill-btn3 socialz"  rel="noopener noreferrer" href="mailto:info@festivalceremonia.com">
                CONTACTO
              </a>{" "}
              <a
                href="https://discord.gg/7a3aEZaZeD"
                rel="noopener noreferrer"
                target="_blank"
                className=" pill-btn4 red"
              >
                <span>
                  <i className="fab socialz pill0 fa-discord"></i>
                </span>
              </a>
              {" "}
              <a
                href="https://twitter.com/CeremoniaFest"
                rel="noopener noreferrer"
                target="_blank"
                className="red   pill-btn5"
              >
                <span>
                  <i className="fa socialz  pill1 fa-twitter "></i>
                </span>
              </a>
            </p>
          </div>
        </div>
        </section>
      </>
    );
  }
}
