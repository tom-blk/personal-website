import React from 'react'
import './OnHoverTrigger.Styles.css'

interface Props{
    className: string,
    prompt: string,
    onHoverFunction : () => void
}

const OnHoverTrigger = (props : Props) => {
    const {prompt, className, onHoverFunction} = props;

  return (
    <div 
        onMouseEnter={() => onHoverFunction()} 
        className={`${className} gradient-background-flash`}
    >
        {prompt} &#x2192;
    </div>
  )
}

export default OnHoverTrigger