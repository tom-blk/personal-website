'use client'
import React from 'react'

import "./TechnologyDetailsCard.Styles.css";

interface Props{
  professionalExperience: number,
  generalExperience: number,
  positions: string,
  projects: string,
}

const generalClasses = "p-4 z-30 bg-black bg-opacity-90 border border-slate-800 rounded-md text-sm "
const mobileClasses = "animate-fade-in-out fixed inset-x-0 mx-auto bottom-5 text-xs text-left w-max "
const desktopClasses = "lg:animate-none lg:absolute lg:right-full lg:bottom-auto lg:text-sm"


const TechnologyDetailsCard = (props: Props) => {
  const {professionalExperience, generalExperience, positions, projects} = props;

  return (
    <section className={generalClasses + mobileClasses + desktopClasses}>
      <div>Professional Experience: {professionalExperience}</div>
      <div>General Experience: {generalExperience}</div>
      <div>Positions: {positions}</div>
      <div>Projects: {projects}</div>
    </section>
  )
}

export default TechnologyDetailsCard