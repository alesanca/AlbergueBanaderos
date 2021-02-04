import React from 'react';
import perrete from '../../assets/images/animalesPerdidos.jpg';
import '../../assets/css/animalesPerdidos.css'

const AnimalesPerdidos = () => {
    return (
        <div className="animalesPerdidos">
            <img src={perrete} alt="perrete img"></img>
            <div className="animalesSection">
                <Chip />
            </div>
        </div>
    )
}

export default AnimalesPerdidos;

const Chip = () => {

    return (
        <div className="animalesSection">
            <h2> Animales Perdidos</h2>
            <p>Si has perdido a tu perro o gato, puedes consultar si ha sido encontrado y entregado en el Albergue Insular de Animales, para ello debes introducir el número de microchip en la siguiente casilla:</p>
            <h3>MICROCHIP</h3>
            <input type="text"></input><br/>
            <button>BUSCAR ANIMAL</button>
            <p>Si no tiene microchip instalado y es entregado en el albergue, pasará a estar disponible para su adopción, puedes comprobar en la sección Nuestros animales si se encuentra en el albergue. En caso positivo, para recuperarlo deberás acudir al albergue (no es necesaria cita previa) con alguna prueba fotográfica que demuestre que eres su legítimo dueño.</p>
        </div>
    )
}

