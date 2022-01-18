import React from 'react';

import venue from '../assets/images/venue.jpeg';

export default class Venue extends React.Component {
render() {
    return (
<>


<div className="venuex" alt="MAPA">
  
 
  <div className="imaget columnaz">
    <img className="image__img2" src={venue} alt="Parque Bicentenario"/>
    <div className="image__overlay image__overlay--primary">
        <div className="image__title">Parque Bicentenario</div>
</div>
</div> 
  <div className="imaget columnaz">
    <img className="image__img2" src={venue} alt="Mapa"/>
    <div className="image__overlay image__overlay--primary">
        <div className="image__title">MAPA</div>
    </div>
</div>
  
  
</div>




</>


    )
}

}