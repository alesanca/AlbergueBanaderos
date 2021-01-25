import React from 'react';
import PensandoAdoptar from './HomeSections/pensando-adoptar';
import ConoceAnimales from './HomeSections/conoce-animales';
import ProximoAmigo from './HomeSections/proximoAmigo';
import ImagesSection from './HomeSections/imagesSection';

const Home = () => {
    return (
        <>
        <ImagesSection/>
        <PensandoAdoptar />
        <ConoceAnimales />
        <ProximoAmigo />
        </>
    )
}

export default Home;