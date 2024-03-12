import React, { MutableRefObject, Suspense } from 'react'

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Physics } from '@react-three/rapier';

import Space from "./Space.Component";
import Planet from './Planet.Component';
import Rocket from './Rocket.Component';
import AsteroidStorm from './AsteroidStorm.Component';
import FadeIn from './FadeIn.Component';

interface Props {
    isAutopilotRef: MutableRefObject<boolean>
}

const AppBackground = (autopilot: Props) => {

    const {scene: model} = useLoader(GLTFLoader, "/3d/planets/aerial_rocks_02.gltf");


    return (
        <div className={"w-full h-full"}>
            <Suspense fallback={null}>
                <Canvas gl={{
                    pixelRatio: window.devicePixelRatio,
                    antialias: true,
                }} shadows>
                <FadeIn/>
                <directionalLight position={[30, 10, 10]} intensity={2} />
                <pointLight position={[0, 0, 0]} intensity={3} />
                <Space/>
                <Physics gravity={[0,0,0]}>
                    <AsteroidStorm model={model}/>
                    <Planet model={model}/>
                    <Rocket isAutopilotRef={autopilot.isAutopilotRef} />
                </Physics>
                </Canvas>
            </Suspense>
        </div>
     )
}

export default AppBackground