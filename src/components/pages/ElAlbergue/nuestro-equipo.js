import React from 'react'
import '../../../assets/css/elalbergue.css';
import team1 from '../../../assets/images/team1.jpg';
import team2 from '../../../assets/images/team2.jpg';
import team3 from '../../../assets/images/team3.jpg';

const nuestroEquipo = () => {
    return (
        <div className="nuestroEquipo">
            <h2> Nuestro equipo </h2>
            <p>El albergue está formado por un equipo humano de 13 personas entre veterinarios, auxiliares veterinarios, auxiliares administrativos y operarios de mantenimiento y limpieza.
            <br/> <br/> Dicho personal atiende los animales que llegan al centro, con el fin de darles las mejores atenciones hasta que encuentren un familia que les de un hogar.
            <br/> <br/> Gracias a su empeño y dedicación, más de 2.000 animales tienen una segunda oportunidad, y un número muy importante son recuperados de heridas y enfermedades que hacían peligrar su vida.</p>

            <div className="imageEquipo">
                <img src={team1} alt="operario1"></img>
                <img src={team2} alt="operario2"></img>
                <img src={team3} alt="operario3"></img>
            </div>
        </div>
    )
}

export default nuestroEquipo;
