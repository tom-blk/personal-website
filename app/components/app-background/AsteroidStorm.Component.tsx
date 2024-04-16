import React from 'react'

import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useLoader } from '@react-three/fiber';

import Asteroid from './Asteroid.Component'

const AsteroidStorm = () => {

    const url = "/3d/meteroite/scene.gltf";

    const {scene: model} = useLoader(GLTFLoader, url);

    return (
        <>
            <Asteroid model={model} scale={0.05} speed={0.001} position={[0,30,0]} />
            <Asteroid model={model} scale={0.01} speed={0.003} position={[3,30,0]} />
            <Asteroid model={model} scale={0.07} speed={0.0012} position={[5,30,0]} />
            <Asteroid model={model} scale={0.02} speed={0.005} position={[-5,30,0]} />
            <Asteroid model={model} scale={0.025} speed={0.0014} position={[4,30,0]} />
            <Asteroid model={model} scale={0.01} speed={0.009} position={[-3,30,0]} />
            <Asteroid model={model} scale={0.06} speed={0.004} position={[2,30,0]} />
            <Asteroid model={model} scale={0.03} speed={0.007} position={[1,30,0]} />
        </>
    )
    }

export default AsteroidStorm