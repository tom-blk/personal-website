import React from 'react'
import PositionCard from '../../cards/position-card/PositionCard.Component'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'

import { allPositions } from '@/app/data/positions'
import LargeCardGridResponsivenessHandler from '../../wrappers/large-card-grid-responsiveness-handler/LargeCardGridResponsivenessHandler.Component'

const PositionsList = () => {

  return (
    <ListWrapper listName='Positions'>
      <LargeCardGridResponsivenessHandler amountOfCards={allPositions.length}>
      {
        allPositions.map((position, index) => {
            return (
                <PositionCard key={index} position={position}/>
            )
        })
      }
      </LargeCardGridResponsivenessHandler>
    </ListWrapper>
  )
}

export default PositionsList