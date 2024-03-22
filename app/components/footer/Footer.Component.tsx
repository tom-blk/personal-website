import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const links = [
    {name: "Github", href: "https://github.com/tom-blk", icon:"icons/github.png"},
    {name: "LinkedIn", href: "https://linkedin.com/in/tom-bleek-a7332b182", icon:"icons/linkedin.png"},
  ]

  return (
    <footer className={"flex gap-4 lg:text-lg"}>
      {
      links.map((link, index) => (
        <div key={index} className={`flex items-center ${link.name === "LinkedIn" ? "gap-1" : "gap-2"}`}>
          <img className={"w-6 lg:w-8"} src={link.icon} alt={link.name}/>
          <Link key={index} target='_blank' href={link.href}>{link.name}</Link>
        </div>
      ))
      }
    </footer>
  )
}

export default Footer