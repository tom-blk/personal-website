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
      {name: "Express", isCompetent: false},
      {name: "SQL", isCompetent: false},
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
        <div className={"text-gray-700"}>&#x25C9; Still learning</div>
        <div className={"text-indigo-300"}>&#x25C9; Still learning but I don't feel like an idiot</div>
      </div>
      <div className={"grid grid-cols-3 gap-20"}>
      {
        Object.keys(technologies).map((key: string, index: number) => {
          return (
            <div key={index}>
              <h3 className={"font-light text-sm"}>{key}</h3>
              <ul className={"list-disc list-inside"}>
                {
                  technologies[key as Key].map((technology: Technology, index: number) => {
                    return (
                      <li className={`pl-4 ${technology.isCompetent ? 'text-indigo-300' : 'text-gray-700'}`} key={index}>{technology.name}</li>
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