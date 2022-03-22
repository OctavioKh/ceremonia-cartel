import React from "react";

export default class FooterX extends React.Component {
  render() {
    return (
      <>
        {" "}
        <section className="fondo-negro">
        <footerx>
          <div className="footernft fondo-negro">
            <p>
              {/* <a class="pill-btn1 socialz" href="#">
                SMART CONTRACT
              </a>{" "} */}
              <a class="pill-btn2 socialz" href="/">
                FESTIVAL CEREMONIA
              </a>{" "}
              <a class="pill-btn3 socialz"  rel="noopener noreferrer" href="mailto:info@festivalceremonia.com">
                CONTACTO
              </a>{" "}
              <a
                href="https://discord.gg/7a3aEZaZeD"
                rel="noopener noreferrer"
                target="_blank"
                class=" pill-btn4 red"
              >
                <span>
                  <i class="fab socialz pill0 fa-discord"></i>
                </span>
              </a>
              {" "}
              <a
                href="https://twitter.com/CeremoniaFest"
                rel="noopener noreferrer"
                target="_blank"
                class="red   pill-btn5"
              >
                <span>
                  <i class="fa socialz  pill1 fa-twitter "></i>
                </span>
              </a>
            </p>
          </div>
        </footerx>
        </section>
      </>
    );
  }
}
