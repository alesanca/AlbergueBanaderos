import React from 'react'
import '../../../assets/css/header.css';

const ConoceAnimales = () => {
    return (
        <div className="conoceAnimales">
            <h2> Conoce alguno de nuestros animales </h2>
            <p>
            En el Albergue Insular de Animales de Gran Canaria queremos dar la misma oportunidad a todos los animales, por ello te mostramos aquí algunos de forma aleatoria, sin distinción. ¡Porque todos ellos se merecen una oportunidad!
            </p>
            <h3> Aquí se hace la consulta a la BD </h3>
            <button className="MC_btn"> Ver todos los animales </button>
        </div>
    )
}

export default ConoceAnimales;