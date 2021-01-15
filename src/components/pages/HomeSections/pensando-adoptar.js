import React from 'react';
import '../../../assets/css/home.css';
import IMG1 from '../../../assets/images/MC1.PNG';
import IMG2 from '../../../assets/images/mc2.PNG';
import IMG3 from '../../../assets/images/MC3.PNG';


const PensandoAdoptar = () => {
    return (
        <div className="pensandoAdoptar">
            <h2> ¿Pensando en adoptar una mascota? </h2>
            <div className="grid-container">
            
                <div className="flex-item">
                    <img src={IMG1} alt="¿Por qué es mejor adoptar?"></img>
                    <p> ¿Por qué es mejor adoptar? </p>
                    <p>Descubre todos los beneficios de la adopción de mascotas. </p>
                    <button className="MC_btn"> Quiero saber más </button>
                </div>

                <div className="flex-item">
                    <img src={IMG2} alt="Elige tu mascota"></img>
                    <p> Elige tu mascota </p>
                    <p>Te ayudamos a encontrar a la mejor mascota para tí y tu familia. </p>
                    <button className="MC_btn"> Quiero saber más </button>
                </div>

                <div className="flex-item">
                    <img src={IMG3} alt="¿Tienes alguna duda?"></img>
                    <p> ¿Tienes alguna duda? </p>
                    <p> Consulta nuestra sección de preguntas frecuentes. </p>
                    <button className="MC_btn"> Quiero saber más </button>
                </div>
                
            </div>
        </div>
    )
}

export default PensandoAdoptar;
