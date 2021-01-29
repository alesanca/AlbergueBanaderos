import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FAQ from '../../assets/images/faq.PNG';
import '../../assets/css/faq.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const Faq = () => {
    return (
        <div className="faq">
            <img src={FAQ} alt="imagen del faq"></img>
            <div className="accordionSection">
                <Accordion>
                    <CardWrapper />
                </Accordion>
            </div>
        </div>
    )
}

const CardWrapper = () => {
    return (
    array.map(item => (
        <Card>
            <Card.Header >
                <Accordion.Toggle as={Button} variant="link" eventKey={item.key} >
                    <div className="toggleBody">
                        {item.title}
                    </div>
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey={item.key}>
                <Card.Body>
                    {item.body}
                </Card.Body>
            </Accordion.Collapse>
        </Card>   
        ))
    )};
    

const array = [
    {
        title: '¿Cuál es el horario de apertura del Albergue Insular de Animales?',
        body: <><li>De lunes a viernes de 10:00 a 12:00 y de 16:00 a 18:30</li><li>Sábados y domingos de 09:00 a 14:00</li><li>Festivos cerrado.</li> </> ,
        key: 1
    },
    {
        title: '¿Qué hacer si quiero entregar a mi perro o gato?',
        body: 'En primer lugar, debes intentar buscar un dueño que pueda hacerse cargo de él, en caso de que no encuentres a nadie, puedes llamar al Ayuntamiento de tu municipio para entregarlo.',
        key: 2
    },
    {
        title: '¿Qué hacer cuándo encuentras un animal perdido?',
        body: 'Puedes llamar a los servicios municipales de tu Ayuntamiento, a la Policía Local o entregarlo en el Albergue Insular de Animales en el horario de atención al público, no es necesaria cita previa.',
        key: 3
    },
    {
        title: '¿Qué servicios presta el albergue?',
        body:   <>
                    <p>El Albergue Insular de Animales presta los siguientes servicios:</p>
                    <li>Servicio de recogida de animales abandonados, sueltos, vagabundos o perdidos, entregados por la administración pública, siempre y cuando NO tengan microchip implantado. O teniéndolo, no hayan localizado al propietario y haya transcurrido el plazo legal establecido en el Decreto 117/1995, de 11 de mayo, o bien por el fallecimiento del dueño y no encontrar familiares que se hagan cargo del animal.</li>
                    <li>Servicio de recogida de animales abandonados, sueltos, vagabundos o perdidos, encontrados por particulares.</li>
                    <li>Servicio de mantenimiento y custodia de los animales.</li>
                    <li>Servicios veterinarios de los animales en el centro:</li>
                    <ol>
                        <li>Desparasitación externa e interna de los animales</li>
                        <li>Vacunaciones</li>
                        <li>Esterilizaciones</li>
                        <li>Instalación de microchip</li>
                        <li>Control sanitario</li>
                    </ol>
                    <li>Servicios de adopciones de gatos y perros</li>
                </>,
        key: 4
    },
    {
        title: 'La recogida del animal',
        body: <p>El animal adoptado será recogido en el centro en la fecha y hora indicados por el personal del albergue, se deberá aportar la copia del contrato de adopción y el DNI.<br/><br/> En el caso de los perros, es imprescindible que acudan con correa, collar, pechera o transportín para su transporte en el vehículo. En el caso de los gatos es obligatorio acudir con transportín. <br/><br/> En el Albergue Insular no se atenderá ningún tipo de consulta clínica una vez los animales hayan salido adoptados del centro, por lo que deberán acudir a su veterinario particular para cualquier consulta. </p>,
        key: 5
    },
    {
        title: '¿Por qué esterilizar?',
        body: 'La esterilización es un procedimiento practicado tanto en perros como gatos, una vez son adoptados, en busca de evitar que sus dueños pretendan obtener beneficios a través de su explotación, así como impedir los efectos negativos que genera la superpoblación.',
        key: 6
    },
    {
        title: '¿Cómo se entregan los animales?',
        body: 'La esterilización es un procedimiento practicado tanto en perros como gatos, una vez son adoptados, en busca de evitar que sus dueños pretendan obtener beneficios a través de su explotación, así como impedir los efectos negativos que genera la superpoblación.',
        key: 7
    },
    {
        title: '¿Hay tasa de adopción?',
        body: 'Actualmente no se aplica ninguna tasa por adopción. La adopción de animales en el Albergue Insular es GRATUITA.',
        key: 8
    },
    {
        title: '¿Qué son perros potencialmente peligrosos?',
        body:   <>
                    <p>Son aquellos perros que por su tamaño, carácter o raza tienen la capacidad de causar la muerte o lesiones a las personas o a otros animales y daños a las cosas. Las razas, o sus cruces, que se consideran potencialmente peligrosas según el Real Decreto 287/2002, de 22 de marzo, son:</p>
                        <li>Pit Bull Terrier</li>
                        <li>Staffordshire Bull Terrier</li>
                        <li>American Staffordshire Terrier</li>
                        <li>Rottweiler</li>
                        <li>Dogo Argentino</li>
                        <li>Fila Brasileiro</li>
                        <li>Tosa Inu</li>
                        <li>Akita Inu</li>
                    <p>Los ayuntamientos podrán regular la inclusión de más razas al listado anteriormente mencionado. También se consideran perros potencialmente peligrosos los que cumplan íntegramente con al menos cinco de las ocho características siguientes, recogidas en el Real Decreto 287/2002, de 22 de marzo:</p>
                        <li>Fuerte musculatura, aspecto poderoso, robusto, configuración atlética, agilidad, vigor y resistencia</li>
                        <li>Marcado carácter y gran valor</li>
                        <li>Pelo corto</li>
                        <li>Perímetro torácico comprendido entre 60 y 80 cm., altura a la cruz entre 50 y 70 cm., y peso superior a 20 Kg.</li>
                        <li>Cabeza voluminosa, cuboide, robusta, con cráneo ancho y grande, y mejillas musculosas y abombadas. Mandíbulas grandes y fuertes, boca robusta, ancha y profunda.</li>
                        <li>Cuello ancho, musculoso y corto</li>
                        <li>Pecho macizo, ancho, grande, profundo, costillas arqueadas y lomo musculado y corto.</li>
                        <li>Extremidades anteriores paralelas, rectas y robustas y extremidades posteriores muy musculosas, con patas relativamente largas, formando un ángulo moderado.</li>
                </>,
        key: 9
    },
    {
        title: 'Si decido adoptar, ¿Qué debo hacer?',
        body:   <> 
                    <p> Debes solicitar una cita aquí.</p> 
                    <p>Deberás aportar DNI en vigor para formalizar el contrato de adopción por el cual te haces cargo del animal comprometiéndote a darle unas condiciones de vida adecuadas.</p> 
                    <p>Si se trata de un animal potencialmente peligroso, según lo establecido por la ley, antes de su entrega, deberás disponer de la licencia municipal para la tenencia de animales potencialmente peligrosos que será otorgada por el Ayuntamiento del municipio de residencia del solicitante una vez verificado el cumplimiento de los siguientes requisitos:</p> 
                        <li>Ser mayor de edad.</li>
                        <li>No haber sido sancionado por infracciones graves o muy graves, o con algunas de las sanciones accesorias de las previstas en el apartado 3 del artículo 13 de la Ley 50/1999, de 23 de diciembre</li>
                        <li>Inscripción del animal en el Registro Municipal correspondiente de animales potencialmente peligrosos</li>
                        <li>Disponer de capacidad física y aptitud psicológica para la tenencia de animales potencialmente peligrosos.</li>
                        <li>Acreditación de haber formalizado un seguro de responsabilidad civil por daños a terceros.</li>
                        <li>Deberán llevar de forma obligatoria bozal en lugares públicos, así como la documentación del animal.</li>
                        <li>Deberán ser conducidos ó controlados con cadena o correa no extensible de menos de 2 metros, sin que pueda llevarse más de uno de estos perros por persona.</li>
                        <li>La sustracción o pérdida del animal habrá de ser comunicada por su titular al Ayuntamiento de Las Palmas de Gran Canaria en el plazo máximo de 48 h.</li>
                </>,
        key: 10
    },
    {
        title: '¿Qué condiciones mínimas necesito para adoptar un animal?',
        body: 'Debes ser mayor de edad.',
        key: 11
    }
];

export default Faq;

