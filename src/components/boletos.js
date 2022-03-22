import React from "react";
import Banamex from '../assets/images/Banamex.png'



class Boletos extends React.Component {
    render() {
        return (<>
			
            <div className="contenido contenido_boletos">
			{/* <div className="Banamex" ><img src={Banamex} className="Banamex"/></div> */}
	<div className="contenido_int">
		<div className="columna">
			<div className="white_tkt">
				<div className="tkt_int">
					<div className="boleto_superior">
						<h2 className="general_tkt">GENERAL</h2>
						<p className="precio">$1,799</p>
						<p class="incluye"><span>I</span><span>N</span><span>C</span><span>L</span><span>U</span><span>Y</span><span>E</span><span>:</span></p>
						<div className="listado-izq">
							<ul>
								<li>Acceso al Festival.</li>
								<li>Accesos a todos los escenarios</li>
								<li>Zona de Comida y Barras</li>
								<br/><br/>
							</ul>
						</div>
					</div>
					<div className="boleto_inferior">
						<a href="https://www.ticketmaster.com.mx/event/14005B8780280F43"   rel="noopener noreferrer" target="_blank" className="boton"><p>COMPRA YA</p></a>
					</div>
						
				</div>
			</div>
		</div>
		<div className="columna">
			<div className="black_tkt">
				<div className="tkt_int">
					<div className="boleto_superior">

						<h2>PLUS<div className="morado"> <img src="https://festivalceremonia.com/img/FC2021/comfort-01.svg"/></div></h2>
						<p className="precio">$2,039 </p>
						<p class="incluye"><span>I</span><span>N</span><span>C</span><span>L</span><span>U</span><span>Y</span><span>E</span><span>:</span></p>
						<div className="listado">
							<ul>
								<li>Acceso a baños privados con aire acondicionado</li>
								<li>Entrada exclusiva y rápida al festival</li>
								<li>Barras exclusivas para Comfort Pass</li>
							
							</ul>
						</div>
					</div>
					<a href="https://www.ticketmaster.com.mx/festival-ceremonia-2022-comfort-pass-presentado-por-citibanamex-cdmx-02-04-2022/event/14005C47A4BD5E07"   rel="noopener noreferrer" target="_blank" className="boleto_inferior">
						<div className="boton33"><p>COMPRA YA</p></div>
					</a>
						
				</div>
			</div>
		</div>
		<div className="columna">
			<div className="black_tkt black_tkt2">
				<div className="tkt_int">
					<div className="boleto_superior">
						

					


						<h2>PLUS<div className="morado"> <img src="https://festivalceremonia.com/img/FC2021/plus-01-01.png"/></div></h2>
						<p className="precio">$2,849</p>
						<p class="incluye"><span>I</span><span>N</span><span>C</span><span>L</span><span>U</span><span>Y</span><span>E</span><span>:</span></p>
						<div className="listado">
							<ul>
								<li>Fast Lane</li>
								<li>Acceso a las Zona Plus de los escenarios.</li>
								<li>Baños VIP</li>
								<li>Batería para carga de celulares</li>
								<li>Guardarropa</li>
								<li>Coctelería  y Gastronomía Especializada</li>
								<li>Concierge Online</li>
								<li>Zona de descanso.</li>
							</ul>
						</div>
					</div>
					<a  href="https://www.ticketmaster.com.mx/event/14005B87822410EB"   rel="noopener noreferrer" target="_blank" className="boleto_inferior">
						<div className="boton"><p>COMPRA YA</p></div>
					</a>
						
				</div>
			</div>
		</div>


		<div className="etiqueta">
			<p>BOLETOS EN: <a className="tkt_link"href="https://www.ticketmaster.com.mx/"   rel="noopener noreferrer" target="_blank"><img  className="tktm"src="https://festivalceremonia.com/upload/ticketmaster.svg"/></a></p>
		</div>
	</div>

</div></>
        )
    }
}

export default Boletos;