import React from 'react';
import '../../../assets/css/home.css';


const PensandoAdoptar = () => {
    return (
        <div className="pensandoAdoptar">
            <h2> ¿Pensando en adoptar una mascota? </h2>
            <div className="grid-container">
            
                <div className="flex-item">
                    <p> ¿Por qué es mejor adoptar? </p>
                    <p>Descubre todos los beneficios de la adopción de mascotas. </p>
                    <button> Quiero saber más </button>
                </div>

                <div className="flex-item">
                    <p> Elige tu mascota </p>
                    <p>Te ayudamos a encontrar a la mejor mascota para tí y tu familia. </p>
                    <button> Quiero saber más </button>
                </div>

                <div className="flex-item">
                    <p> ¿Tienes alguna duda? </p>
                    <p> Consulta nuestra sección de preguntas frecuentes. </p>
                    <button> Quiero saber más </button>
                </div>
                
            </div>
        </div>
    )
}

export default PensandoAdoptar;
