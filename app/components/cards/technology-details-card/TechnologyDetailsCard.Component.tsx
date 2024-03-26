'use client'
import React from 'react'

interface Props{
  professionalExperience: number,
  generalExperience: number,
  positions: string,
  projects: string,
}

const TechnologyDetailsCard = (props: Props) => {
  const {professionalExperience, generalExperience, positions, projects} = props;

  return (
    <section className={"p-4 absolute -left-full z-30 bg-black bg-opacity-70 border border-slate-800 rounded-md"}>
      <div>Professional Experience: {professionalExperience}</div>
      <div>General Experience: {generalExperience}</div>
      <div>Positions: {positions}</div>
      <div>Projects: {projects}</div>
    </section>
  )
}

export default TechnologyDetailsCard