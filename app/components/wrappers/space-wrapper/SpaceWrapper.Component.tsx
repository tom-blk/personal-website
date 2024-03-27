import React from 'react'

import AppBackground from '../../app-background/AppBackground.Component'

const SpaceWrapper = () => {    
    return (
        <div className={"w-full h-full fixed -z-10"}>
            <AppBackground/>
        </div>
    )
}

export default SpaceWrapper