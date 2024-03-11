import React from 'react'
import { technologiesList } from '@/app/data/technologies';
import { Technology } from '@/app/types/Projects';
import MiniCard from '../generic/mini-card/MiniCard.Component';

const TechnologiesList = () => {

  const technologies = technologiesList;

  type Key = keyof typeof technologies;

  return (
    <div className={"grid gap-3"}>
      <h2 className={"font-bold"}>Technologies</h2>
      <div className={"text-xs"}>
        <div className={"text-gray-600"}>&#x25C9; Still learning</div>
        <div className={"text-gray-300"}>&#x25C9; Still learning but I don't feel like an idiot</div>
      </div>
      <div className={"grid grid-cols-3 gap-20"}>
      {
        Object.keys(technologies).map((key: string, index: number) => {
          return (
            <div key={index}>
              <h3 className={"mb-2 font-light w-full text-center border-b border-gray-300 text-sm"}>{key}</h3>
              <div className={"grid gap-1 text-center text-sm"}>
                {
                  technologies[key as Key].map((technology: Technology, index: number) => {
                    return (
                      <MiniCard className={`flex gap-1 justify-around hover:bg-opacity-10 py-2 px-6 ${!technology.isAreaOfFocus && 'text-gray-500'}`} key={index}>
                        <img src={technology.imageUrl} alt={technology.name} className={"w-6 h-6"}/>
                        <div>{technology.name}</div>
                      </MiniCard>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default TechnologiesList