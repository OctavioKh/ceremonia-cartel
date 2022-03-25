
import 'bootstrap/dist/css/bootstrap.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Menu extends React.Component {


  
  render() {

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navibar").style.top = "0";
  } else {
    document.getElementById("navibar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
    // const ig = 'https://www.instagram.com/phy__sis/';
    // const fb = 'https://www.facebook.com/physis.2020/';
    // const email = 'mailto:octaviomrq@gmail.com'
      return(
<>
<div id="navibar">
<a><img src="https://festivalceremonia.com/img/FC2021/crmn.png" id="logonavbar" alt="logo"/>
</a>
 <a id="listado" href="#cartel">Cartel</a>
        <AnchorLink id="listado" href="#artistas">Artistas</AnchorLink>
        <AnchorLink id="listado" href="#bloque3">Horarios</AnchorLink>
        <AnchorLink id="listado" href="#mapa">Lugar</AnchorLink>
        <AnchorLink id="listado" href="#boletos">Boletos</AnchorLink>
        <AnchorLink id="listado" href="/ceremonios">Ceremonios</AnchorLink>
        <AnchorLink id="listado" href="/registro">Pre-registro</AnchorLink>
</div>
       </>
      );
    }
  }
