import React from 'react'
import Avatar from '../../avatar/Avatar.Component'
import LocationPin from '../../generic/location-pin/LocationPin.Component'
import Card from '../../generic/card/Card.Component';

const ProfileCard = () => {

  const locationLink = "https://www.google.com/maps/place/V%C3%A4stra+G%C3%B6talands+l%C3%A4n";

  return (
    <Card className={"p-7 gap-1 justify-items-center grid w-fit"}>
      <Avatar/>
      <header className={"w-fit"}>Tom Bleek</header>
      <p className={"text-xs w-fit"}>Junior Developer</p>
      <LocationPin locationLink={locationLink} textSize="xs" location={'Västra Götaland, Sweden'}/>
    </Card>
  )
}

export default ProfileCard