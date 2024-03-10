import React, { Suspense } from 'react'

import { Canvas, useLoader } from "@react-three/fiber";

import Space from "./Space.Component";
import Planet from './Planet.Component';
import { Physics } from '@react-three/rapier';
import RocketStatic from './RocketStatic.Component';
import AsteroidStorm from './AsteroidStorm.Component';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


const BackgroundScene = ({controls}: {controls: "autoPilot" | "mouse"}) => {

    const {scene: model} = useLoader(GLTFLoader, "/3d/planets/aerial_rocks_02.gltf")

    return (
        <div className={"w-full h-full"}>
            <Suspense fallback={null}>
                <Canvas gl={{
                    pixelRatio: window.devicePixelRatio,
                    antialias: true,
                }} shadows>
                <directionalLight position={[30, 10, 10]} intensity={2} />
                <pointLight position={[0, 0, 0]} intensity={3} />
                <Space/>
                <Physics gravity={[0,0,0]}>
                    <AsteroidStorm model={model}/>
                    <Planet model={model}/>
                    <RocketStatic controls={controls} />
                </Physics>
                </Canvas>
            </Suspense>
        </div>
     )
}

export default BackgroundScene