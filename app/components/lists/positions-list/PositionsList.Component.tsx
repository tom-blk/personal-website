import React from 'react'
import PositionCard from '../../cards/position-card/PositionCard.Component'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'

import { allPositions } from '@/app/data/positions'

const PositionsList = () => {
  return (
    <ListWrapper listName='Positions'>
      {
        allPositions.map((position, index) => {
            return (
                <PositionCard key={index} position={position}/>
            )
        })
      }
    </ListWrapper>
  )
}

export default PositionsList