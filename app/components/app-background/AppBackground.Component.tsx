import React, { Suspense, useEffect } from 'react'

import { Canvas } from "@react-three/fiber";
import { Physics } from '@react-three/rapier';

import { useRocketControlsStore } from '@/app/zustand-stores/useRocketControls.Store';

import Space from "./Space.Component";
import Planet from './Planet.Component';
import Rocket from './Rocket.Component';
import AsteroidStorm from './AsteroidStorm.Component';
import FadeIn from './FadeIn.Component';

import './AppBackground.Styles.css'

const AppBackground = () => {

    const { isOnAutoPilot } = useRocketControlsStore();

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
                <div></div>
                <Canvas gl={{
                    antialias: true,
                }} shadows>
                <FadeIn/>
                <directionalLight position={[30, 10, 10]} intensity={2} />
                <pointLight position={[0, 0, 0]} intensity={3} />
                <Space/>
                <Physics gravity={[0,0,0]}>
                    {
                        isOnAutoPilot 
                        ? <></>
                        : <AsteroidStorm />
                    }
                    <Planet/>
                    <Rocket/>
                </Physics>
                </Canvas>
            </Suspense>
        </div>
     )
}

export default AppBackground