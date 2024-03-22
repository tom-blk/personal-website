import React from 'react'

const Avatar = () => {

    const img = 'images/me.png'

  return (
    <div className={"h-28 w-28 rounded-full overflow-hidden lg:h-36 lg:w-36"}>
        <img className={"h-full"} src={img}/>
    </div>
  )
}

export default Avatar