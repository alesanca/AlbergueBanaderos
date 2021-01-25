import React from 'react';
import portada from '../../assets/images/legislacion.PNG';
import '../../assets/css/legislacion.css';
import CuadroLegislacion from './Legislacion/cuadroLegislacion';

const Legislacion = () => {
    return (
        <div className="legislacion">
            <img src={portada} alt="imagen de portada"></img>
            <CuadroLegislacion />
        </div>
    )
}

export default Legislacion;
