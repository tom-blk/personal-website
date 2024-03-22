import React from 'react'
import PositionCard from '../../cards/position-card/PositionCard.Component'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'

import { allPositions } from '@/app/data/positions'

const PositionsList = () => {
  return (
    <ListWrapper listName='Positions'>
      <div className={"grid gap-3 md:grid-cols-2 lg:grid-cols-3"}>
      {
        allPositions.map((position, index) => {
            return (
                <PositionCard key={index} position={position}/>
            )
        })
      }
      </div>
    </ListWrapper>
  )
}

export default PositionsList