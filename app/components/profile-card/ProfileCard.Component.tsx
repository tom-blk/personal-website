import React from 'react'
import Avatar from '../avatar/Avatar.Component'
import LocationPin from '../location-pin/LocationPin.Component'

const ProfileCard = () => {

  const locationLink = "https://www.google.com/maps/place/V%C3%A4stra+G%C3%B6talands+l%C3%A4n";

  return (
    <article className={"p-7 gap-1 justify-items-center grid w-fit border shadow-lg border-slate-800 rounded-md"}>
        <Avatar/>
        <header className={"w-fit"}>Tom Bleek</header>
        <p className={"text-xs w-fit"}>Junior Developer</p>
        <LocationPin locationLink={locationLink} textSize="xs" location={'Västra Götaland, Sweden'}/>
    </article>
  )
}

export default ProfileCard