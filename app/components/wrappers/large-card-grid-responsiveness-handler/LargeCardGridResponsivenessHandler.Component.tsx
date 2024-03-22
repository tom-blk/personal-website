import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode,
    amountOfCards: number
}

const LargeCardGridResponsivenessHandler = (props: Props) => {
    const {amountOfCards, children} = props;

    const returnAppropriateColumns = (maxColumns: number) => {
        if (amountOfCards > maxColumns){
          return `grid-cols-${maxColumns}`
        } else {
          return `grid-cols-${amountOfCards}`
        }
      }

  return (
    <div className={`grid gap-3 md:${returnAppropriateColumns(2)} lg:${returnAppropriateColumns(3)}`}>
        {children}
    </div>
  )
}

export default LargeCardGridResponsivenessHandler