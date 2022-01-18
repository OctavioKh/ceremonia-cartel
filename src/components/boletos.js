import React from "react";
import Banamex from '../assets/images/Banamex.png'

class Boletos extends React.Component {
    render() {
        return (<>
			
            <div className="contenido contenido_boletos">
			<div className="Banamex" ><img src={Banamex} className="Banamex"/></div>
	<div className="contenido_int">
		<div className="columna">
			<div className="white_tkt">
				<div className="tkt_int">
					<div className="boleto_superior">
						<h2 className="general_tkt">GENERAL</h2>
						<p className="precio">$1,699</p>
						<p className="incluye">
							<span>I</span>
							<span>N</span>
							<span>C</span>
							<span>L</span>
							<span>U</span>
							<span>Y</span>
							<span>E</span>
							<span>:</span>
						</p>
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
						<a href="https://www.ticketmaster.com.mx/event/14005B8780280F43" target="_blank" className="boton"><p>COMPRA YA</p></a>
					</div>
						
				</div>
			</div>
		</div>
		<div className="columna">
			<div className="black_tkt">
				<div className="tkt_int">
					<div className="boleto_superior">
						<h2>PLUS <img src="https://festivalceremonia.com/upload/sponsor/plus.svg"/></h2>
						<p className="precio">$2,599</p>
						<p className="incluye">
							<span>I</span>
							<span>N</span>
							<span>C</span>
							<span>L</span>
							<span>U</span>
							<span>Y</span>
							<span>E</span>
							<span>:</span>
						</p>
						<div className="listado">
							<ul>
								<li>Fast Lane</li>
								<li>Estacionamiento Preferencial</li>
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
					<a href="https://www.ticketmaster.com.mx/event/14005B87822410EB" target="_blank" className="boleto_inferior">
						<div className="boton"><p>COMPRA YA</p></div>
					</a>
						
				</div>
			</div>
		</div>
		<div className="etiqueta">
			<p>Boletos en <a className="tkt_link"href="https://www.ticketmaster.com.mx/" target="_blank"><img src="https://festivalceremonia.com/upload/ticketmaster.svg"/></a></p>
		</div>
	</div>

</div></>
        )
    }
}

export default Boletos;