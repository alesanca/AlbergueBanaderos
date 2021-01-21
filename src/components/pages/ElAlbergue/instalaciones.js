import React from 'react';
import img1 from '../../../assets/images/img1.PNG';
import img2 from '../../../assets/images/img2.PNG';
import img3 from '../../../assets/images/img3.PNG';
import img4 from '../../../assets/images/img4.PNG';
import img5 from '../../../assets/images/img5.PNG';
import img6 from '../../../assets/images/img6.PNG';
import img7 from '../../../assets/images/img7.PNG';
import img8 from '../../../assets/images/img8.PNG';
import img9 from '../../../assets/images/img9.PNG';
import img10 from '../../../assets/images/img10.PNG';

const instalaciones = () => {
    return (
        <div className="instalaciones">
            <h2>Instalaciones </h2>
            <p>El Albergue Insular de Animales sito en la Carretera General del Norte, 86, en el término municipal de Arucas, cuenta con las siguientes instalaciones:</p>
            <ul>
                <Lista />
            </ul>
        </div>
    )
}

const Lista = () => {
    return (
        <>
            <li className="liInstalaciones">
                Sala de recepción
                <img src={img1} alt=""></img>
            </li>
            <li className="liInstalaciones">
                Administración
                <img src={img2} alt=""></img>
            </li>
            <li className="liInstalaciones">
                Consulta Veterinaria
                <img src={img3} alt=""></img>
            </li>
            <li className="liInstalaciones">
                Hospital para gatos y perros
                <img src={img4} alt=""></img>
            </li>
            <li className="liInstalaciones">
                Zona de gatos (gatera grande y pequeña) 
                <img src={img5} alt=""></img>
            </li>
            <li className="liInstalaciones">
                53 boxes o estancias
                <img src={img6} alt=""></img>
            </li>
            <li className="liInstalaciones">
                10 corrales
                <img src={img7} alt=""></img>
            </li>
            <li className="liInstalaciones">
                UCI
                <img src={img8} alt=""></img>
            </li>
            <li className="liInstalaciones">
                Almacén
                <img src={img9} alt=""></img>
            </li>
            <li className="liInstalaciones">
                Quirófano
                <img src={img10} alt=""></img>
            </li>
        </>
    )
}

export default instalaciones;
