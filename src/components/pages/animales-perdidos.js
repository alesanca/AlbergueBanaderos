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
        <div>
            
        </div>
    )
}

