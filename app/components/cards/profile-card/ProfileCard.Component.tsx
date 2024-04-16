import React from 'react'
import Avatar from '../../generic/avatar/Avatar.Component'
import LocationPin from '../../generic/location-pin/LocationPin.Component'
import CardWrapper from '../../wrappers/card-wrapper/CardWrapper.Component';

const ProfileCard = () => {

  const locationLink = "https://www.google.com/maps/place/V%C3%A4stra+G%C3%B6talands+l%C3%A4n";

  return (
    <CardWrapper className={"p-6 gap-1 justify-items-center grid w-fit lg:p-8"}>
      <Avatar/>
      <header className={"w-fit lg:text-xl"}>Tom Bleek</header>
      <p className={"text-xs w-fit lg:text-base"}>Software Developer</p>
      <LocationPin locationLink={locationLink} textSize="xs" textSizeLarge="base" location={'Västra Götaland, Sweden'}/>
    </CardWrapper>
  )
}

export default ProfileCard