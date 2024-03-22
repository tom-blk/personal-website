'use client'
import React from 'react'
import Image from 'next/image'

const GitHubIconLink = ({gitHubLink} : {gitHubLink: string}) => {

  const gitHubIcon = "/icons/github.png";

  const handleGitHubIconCLick = (e : any) => {
    window.open(gitHubLink, '_blank')
  }

  return (
    <div className={"z-10 w-6 h6 shrink-0 lg:w-8 lg:h-8"}>
      <Image onClick={(e) => handleGitHubIconCLick(e)} width={0} height={0} sizes='100%' className={"w-full h-full"} src={gitHubIcon} alt="GitHub"/>
    </div>
    
  )
}

export default GitHubIconLink