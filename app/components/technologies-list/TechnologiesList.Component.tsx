import React from 'react'

interface Technology{
  name: string;
  isCompetent: boolean;
}

const TechnologiesList = () => {

  const technologies = {
    Frontend: [
      {name:"React", isCompetent: true}, 
      {name:"Next.js", isCompetent: true}, 
      {name:"Typescript", isCompetent: true}, 
      {name: "HTML5", isCompetent: true},
      {name: "CSS", isCompetent: true},
      {name: "Tailwind CSS", isCompetent: true}],
    Backend: [
      {name: "Node.js", isCompetent: true},
      {name: "Express.js", isCompetent: false},
      {name: "MySQL", isCompetent: false},
      {name: "REST", isCompetent: false},
      {name: "Rust", isCompetent: false}],
    Other: [
      {name: "Git", isCompetent: true},
      {name: "Linux", isCompetent: false}]
  }

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
              <ul className={"grid gap-1 text-center text-sm"}>
                {
                  technologies[key as Key].map((technology: Technology, index: number) => {
                    return (
                      <li className={`bg-opacity-5 hover:bg-opacity-10 bg-gray-400 rounded-sm p-2 ${technology.isCompetent ? 'text-gray-300' : 'text-gray-600'}`} key={index}>{technology.name}</li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default TechnologiesList