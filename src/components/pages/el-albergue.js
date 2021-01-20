import React from 'react';
import  entrada  from '../../assets/images/entrada.jpg';
import '../../assets/css/elalbergue.css'
import NuestraMision from './ElAlbergue/nuestra-mision'

const Albergue = () => {
    return (
        <>
        <img src={entrada} alt="entrada"></img>
        <NuestraMision />
        </>
    )
}

export default Albergue;