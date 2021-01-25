import React from 'react';
import '../assets/css/footer.css';
import logos from '../assets/images/logos.PNG'

const footer = () => {
    return (
        <div className="footer">

            <div className="leftSide">
            <img src={logos} alt="logos"></img>
                <div className="contacto">
                    <p> Albergue Insular de Animales de Gran Canaria <br/>
                        Carretera General del Norte, 86, Arucas. <br/>
                        Teléfono: 928 17 04 01
                    </p>
                </div>

               
                <div className="enlaces">
                    <a href="#">Cookies</a>
                    <a href="#">Aviso legal</a>
                    <br/>
                    <a href="#">Política de privacidad</a>
                    <a href="#">Preguntas frecuentes</a>
                </div>
            </div>
     
                
        

        </div>
    )
}

export default footer;
