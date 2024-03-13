'use client'
import React, { useRef } from 'react'
import AppBackground from './AppBackground.Component'

const SpaceWrapper = () => {

    const isAutopilotRef = useRef(true);

    const handleControlChange = () => {
        isAutopilotRef.current = !isAutopilotRef.current;
        console.log("click")
    }

    return (
        <div className={"w-full h-full fixed -z-10"}>
            <button
                onClick={handleControlChange}
                className={"absolute top-8 right-8 border border-red-900 z-10 rounded-md p-3"}
            >
                Take Control
            </button>
            <AppBackground isAutopilotRef={isAutopilotRef}/>
        </div>
    )
}

export default SpaceWrapper