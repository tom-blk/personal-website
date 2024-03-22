import React from 'react'
import Avatar from '../../generic/avatar/Avatar.Component'
import LocationPin from '../../generic/location-pin/LocationPin.Component'
import CardWrapper from '../../wrappers/card-wrapper/CardWrapper.Component';

const ProfileCard = () => {

  const locationLink = "https://www.google.com/maps/place/V%C3%A4stra+G%C3%B6talands+l%C3%A4n";

  return (
    <CardWrapper className={"p-7 gap-1 justify-items-center grid w-fit"}>
      <Avatar/>
      <header className={"w-fit"}>Tom Bleek</header>
      <p className={"text-xs w-fit"}>Software Developer</p>
      <LocationPin locationLink={locationLink} textSize="xs" location={'Västra Götaland, Sweden'}/>
    </CardWrapper>
  )
}

export default ProfileCard