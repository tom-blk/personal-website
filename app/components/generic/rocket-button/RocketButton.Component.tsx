'use client'

import React from 'react'

import { useRocketControlsStore } from '@/app/zustand-stores/useRocketControls.Store'

const RocketButton = () => {
    
    const { isOnAutoPilot, changeControls } = useRocketControlsStore()

    const handleControlChange = () => {
        changeControls(!isOnAutoPilot);
    }
    
    return(
        <button
            onClick={handleControlChange}
            className={"absolute top-2 right-8 h-14 w-14 border border-red-900 z-50 rounded-md p-2 hover:cursor-pointer"}
        >
            <svg fill='#ffffff' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"} viewBox="0 0 512 512">
                <g>
                    <path d="M127.083,247.824l50.031-76.906c0,0-74.734-29.688-109.547-3.078C32.755,194.465,0.005,268.184,0.005,268.184
                        l37.109,21.516C37.114,289.699,84.083,198.684,127.083,247.824z"/>
                    <path d="M264.177,384.918l76.906-50.031c0,0,29.688,74.734,3.078,109.547
                        c-26.625,34.797-100.344,67.563-100.344,67.563l-21.5-37.109C222.317,474.887,313.333,427.918,264.177,384.918z"/>
                    <path d="M206.692,362.887l-13.203-13.188c-24,62.375-80.375,49.188-80.375,49.188s-13.188-56.375,49.188-80.375
                        l-13.188-13.188c-34.797-6-79.188,35.984-86.391,76.766c-7.188,40.781-8.391,75.563-8.391,75.563s34.781-1.188,75.578-8.391
                        S212.692,397.684,206.692,362.887z"/>
                    <path d="M505.224,6.777C450.786-18.738,312.927,28.98,236.255,130.668c-58.422,77.453-89.688,129.641-89.688,129.641
                        l46.406,46.406l12.313,12.313l46.391,46.391c0,0,52.219-31.25,129.672-89.656C483.005,199.074,530.739,61.215,505.224,6.777z
                        M274.63,237.371c-12.813-12.813-12.813-33.594,0-46.406s33.578-12.813,46.406,0.016c12.813,12.813,12.813,33.578,0,46.391
                        C308.208,250.184,287.442,250.184,274.63,237.371z M351.552,160.465c-16.563-16.578-16.563-43.422,0-59.984
                        c16.547-16.563,43.406-16.563,59.969,0s16.563,43.406,0,59.984C394.958,177.012,368.099,177.012,351.552,160.465z"/>
                </g>
            </svg>
        </button>
    )
}

export default RocketButton