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
            <Accordion>
                <CardWrapper />
            </Accordion>
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
        body: 'hey',
        key: 0
    },
    {
        title: '¿Qué hacer si quiero entregar a mi perro o gato?',
        body: 'En primer lugar, debes intentar buscar un dueño que pueda hacerse cargo de él, en caso de que no encuentres a nadie, puedes llamar al Ayuntamiento de tu municipio para entregarlo.',
        key: 1
    },
    {
        title: '¿Qué hacer cuándo encuentras un animal perdido?',
        body: 'Puedes llamar a los servicios municipales de tu Ayuntamiento, a la Policía Local o entregarlo en el Albergue Insular de Animales en el horario de atención al público, no es necesaria cita previa.',
        key: 2
    },
    {
        title: '¿Qué servicios presta el albergue?',
        body: 'Hey',
        key: 3
    },
    {
        title: 'La recogida del animal',
        body: 'El animal adoptado será recogido en el centro en la fecha y hora indicados por el personal del albergue, se deberá aportar la copia del contrato de adopción y el DNI. En el caso de los perros, es imprescindible que acudan con correa, collar, pechera o transportín para su transporte en el vehículo. En el caso de los gatos es obligatorio acudir con transportín. En el Albergue Insular no se atenderá ningún tipo de consulta clínica una vez los animales hayan salido adoptados del centro, por lo que deberán acudir a su veterinario particular para cualquier consulta.',
        key: 4
    },
    {
        title: '¿Por qué esterilizar?',
        body: 'La esterilización es un procedimiento practicado tanto en perros como gatos, una vez son adoptados, en busca de evitar que sus dueños pretendan obtener beneficios a través de su explotación, así como impedir los efectos negativos que genera la superpoblación.',
        key: 5
    },
    {
        title: '¿Cómo se entregan los animales?',
        body: 'La esterilización es un procedimiento practicado tanto en perros como gatos, una vez son adoptados, en busca de evitar que sus dueños pretendan obtener beneficios a través de su explotación, así como impedir los efectos negativos que genera la superpoblación.',
        key: 6
    },
    {
        title: '¿Hay tasa de adopción?',
        body: 'Actualmente no se aplica ninguna tasa por adopción. La adopción de animales en el Albergue Insular es GRATUITA.',
        key: 7
    },
    {
        title: '¿Qué son perros potencialmente peligrosos?',
        body: 'hey',
        key: 8
    },
    {
        title: 'Si decido adoptar, ¿Qué debo hacer?',
        body: 'Hey',
        key: 9
    },
    {
        title: '¿Qué condiciones mínimas necesito para adoptar un animal?',
        body: 'Debes ser mayor de edad.',
        key: 10
    }
];

export default Faq;

