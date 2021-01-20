import React from 'react';
import  entrada  from '../../assets/images/entrada.jpg';
import '../../assets/css/elalbergue.css'
import NuestraMision from './ElAlbergue/nuestra-mision'
import NuestroEquipo from './ElAlbergue/nuestro-equipo';

const Albergue = () => {
    return (
        <>
        <img src={entrada} alt="entrada"></img>
        <NuestraMision />
        <NuestroEquipo />
        </>
    )
}

export default Albergue;