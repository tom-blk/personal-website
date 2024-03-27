'use client'

import React, { MutableRefObject, Suspense, useEffect } from 'react'

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Physics } from '@react-three/rapier';

import Space from "./Space.Component";
import Planet from './Planet.Component';
import Rocket from './Rocket.Component';
import AsteroidStorm from './AsteroidStorm.Component';
import FadeIn from './FadeIn.Component';

import './AppBackground.Styles.css'

const AppBackground = () => {

    useEffect(() => {
        const setWindowHeightVariable = () => {
            const vh = window.innerHeight;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setWindowHeightVariable();
    }, [])

    return (
        <div className={"w-full custom-vh fixed"}>
            <Suspense fallback={null}>
                <Canvas gl={{
                    antialias: true,
                }} shadows>
                <FadeIn/>
                <directionalLight position={[30, 10, 10]} intensity={2} />
                <pointLight position={[0, 0, 0]} intensity={3} />
                <Space/>
                <Physics gravity={[0,0,0]}>
                    <Planet/>
                    <Rocket/>
                </Physics>
                </Canvas>
            </Suspense>
        </div>
     )
}

export default AppBackground