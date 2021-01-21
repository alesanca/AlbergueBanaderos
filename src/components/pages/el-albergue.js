import React from 'react';
import  entrada  from '../../assets/images/entrada.jpg';
import '../../assets/css/elalbergue.css'
import NuestraMision from './ElAlbergue/nuestra-mision'
import NuestroEquipo from './ElAlbergue/nuestro-equipo';
import Instalaciones from './ElAlbergue/instalaciones';
import Voluntariado from './ElAlbergue/voluntariado';

const Albergue = () => {
    return (
        <>
        <img src={entrada} alt="entrada"></img>
        <div className="nuestroContent">
            <NuestraMision />
            <NuestroEquipo />
            <Instalaciones />
            <Voluntariado />
        </div>
        </>
    )
}

export default Albergue;