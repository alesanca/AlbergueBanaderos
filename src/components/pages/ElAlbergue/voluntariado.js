import React from 'react';
import '../../../assets/css/elalbergue.css';

const voluntariado = () => {
    return (
        <div className="voluntariado">
            <Text />
            <Contact />
        </div>
    )
}

const Text = () => {
    return (
        <>
        <h2>Voluntariado</h2>
            <p>Un voluntario es la persona que por elección propia y por razones ideológicas, éticas, morales o personales decide dedicar una parte de su tiempo, trabajo y recursos a una acción solidaria y altruista, por la cual no recibe ningún tipo de compensación económica, pero sí una contraprestación en satisfacción, aprendizaje y experiencia, entre otras.
            <br/> <br/> Para ser voluntario se deben cumplir los siguientes requisitos:</p>
            <li>Ser mayor de edad</li>
            <li>Contar con un elevado sentido de la responsabilidad y del compromiso.</li>
            <li>La colaboración que se preste estará dirigida al incremento del bienestar y confort de los animales alojados, además de promover la adopción y fomentar la lucha contra el maltrato y el abandono.</li>
            <li>Conocer y aceptar las normas de funcionamiento y métodos de trabajo del Albergue Insular de Animales de Gran Canaria</li>        
            <br/>
            <p>Las actividades a desarrollar por los voluntarios serán:</p>
            <li>Paseo, ejercicio de los perros.</li>
            <li>Socialización y educación de los perros.</li>
            <li>Higiene de los animales (cepillar, cortar el pelo y bañar).</li>
            <li>Socialización de los gatos.</li>
            <li>Recopilación de información sobre el carácter del animal: ayudará a elaborar fichas más completas de los animales</li>
            <li>Detección de cualquier anomalía: En el tiempo de ocio, poniéndola en conocimiento del equipo veterinario del centro.</li>
            <br/>
            <p>Si deseas inscribirte como voluntario rellena los siguientes campos y el personal del Albergue Insular de Animales se pondrá en contacto contigo para realizar los trámites oportunos.</p>
            <br/>
        </>
    )
}

const Contact = () => {
    return (
        <div className="contactForm">
        <p>Nombre  
        <input type="text"></input> </p>
       

        <p>Email
        <input type="text"></input> </p>
        

        <p>Teléfono
        <input type="number"></input> </p>
        

        <p> Comentarios 
        <textarea></textarea></p>
       
        <p><input type="checkbox"/> He leído y acepto la política de privacidad</p>

        <button>Quiero ser voluntario </button>
        </div>
    )
}

export default voluntariado;
