'use client'
import React, { useState } from 'react'
import BackgroundScene from './BackgroundScene.Component'

const SpaceWrapper = () => {

    const [controls, setControls] = useState<"mouse" | "autoPilot">("autoPilot")

    const handleControlChange = () => {
        if(controls === "autoPilot"){
            setControls("mouse")
        } else {
            setControls("autoPilot")
        }
    }

    return (
        <div className={"w-full h-full fixed -z-10"}>
            <button
                onClick={handleControlChange}
                className={"absolute top-8 right-8 border border-red-900 z-10 rounded-md p-3"}
            >
                Take Control
            </button>
            <BackgroundScene controls={controls}/>
        </div>
    )
}

export default SpaceWrapper