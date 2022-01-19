import React from 'react';

import venue from '../assets/images/venue.jpeg';
import venue2 from '../assets/images/venuex-02.png';


export default class Venue extends React.Component {
render() {
    return (
<>


<div className="venuex venuey" alt="MAPA">
  
 
  <div className="imaget columnaz">
    <img className="image__img2" src={venue} alt="Parque Bicentenario"/>
    <div className="image__overlay2 image__overlay--one">
        <div className="image__title">Parque Bicentenario</div>
</div>
</div> 
  <div className="imaget columnaz">

  <img className="image__img2" src={venue2} alt="Parque Bicentenario"/>
    <div className="image__overlay2 image__overlay--two">
        <div className="image__title">CEREMONIA 2022</div>
</div>
</div> 
   

  
  
</div>




</>


    )
}

}