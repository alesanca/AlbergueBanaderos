import React from 'react';
import portadaContacto from '../../assets/images/contacto.PNG';
import mapa from '../../assets/images/maps.PNG';
import '../../assets/css/contacto.css';

const Contacto = () => {
    return (
        <div className="contactPage">
            <img src={portadaContacto} alt="foto"></img>
            <Contact />
        </div>
    )
}

const Contact = () => {
    return (
        <div className="contactSection">
            <img src={mapa} alt="mapa del lugar"></img>
            <div className="contactInfo">
                <h2>¿Quieres contactar con nosotros?</h2>
                <p>
                Recuerde que para adoptar es imprescindible acudir con cita previa.  <br/>
                <br/>
                Dirección: Carretera General del Norte, 86, Arucas  <br/>
                Teléfono: 928 17 04 01  <br/>
                <br/>
                Horario de atención al público es:
                </p>
                <ListaHorario />
            </div>
        </div>
    )
}

const ListaHorario = () => {
    return (
        <ul>
            <li>Lunes a Viernes: De 10:00 a 12:00 hrs y De 16:00 a 18:30 hrs</li>
            <li>Sábados y Domingos: De 09:00 a 14:00 hrs</li>
            <li>Festivos cerrado. </li>
        </ul>
    )
}

export default Contacto;
