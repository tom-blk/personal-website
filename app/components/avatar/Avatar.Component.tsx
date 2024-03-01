import React from 'react'

const Avatar = () => {

    const img = 'images/me.png'

  return (
    <div className={"h-28 w-28 rounded-full overflow-hidden"}>
        <img className={"h-full"} src={img}/>
    </div>
  )
}

export default Avatar