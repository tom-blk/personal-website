import React from 'react'
import { allPositions } from '@/app/data/positions'
import PositionCard from '../../cards/position-card/PositionCard.Component'

const PositionsList = () => {
  return (
    <div>
        <h2 className={"font-bold"}>Positions</h2>
        {
            allPositions.map((position, index) => {
                return (
                    <PositionCard key={index} position={position}/>
                )
            })
        }
    </div>
  )
}

export default PositionsList