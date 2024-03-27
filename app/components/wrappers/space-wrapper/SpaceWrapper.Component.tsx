'use client'

import React from 'react'

import { useRocketControlsStore } from '@/app/zustand-stores/useRocketControls.Store'

import AppBackground from '../../app-background/AppBackground.Component'

const SpaceWrapper = () => {    

    const { isOnAutoPilot } = useRocketControlsStore();

    return (
        <div className={`w-full h-full fixed ${isOnAutoPilot ? "-z-10" : "z-40"}`}>
            <AppBackground/>
        </div>
    )
}

export default SpaceWrapper