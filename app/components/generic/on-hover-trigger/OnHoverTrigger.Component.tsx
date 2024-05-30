'use client'
import React from 'react'
import './OnHoverTrigger.Styles.css'

interface Props{
    className: string,
    prompt: string,
    // onHoverFunction might actually also be called on click, on smaller screen sizes, but since the component is designed for 'hover stuff', this is the name
    onHoverFunction : () => void
}

const OnHoverTrigger = (props : Props) => {
    const {prompt, className, onHoverFunction} = props;

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        onHoverFunction();
        // We need both stop propagation and prevent default here, since this component might be contained in either a link or a div, and both cases need to be handled
    }

  return (
    <div 
        onClick={e => handleOnClick(e)}
        className={`${className} gradient-background-flash`}
    >
        {prompt} &#x2192;
    </div>
  )
}

export default OnHoverTrigger
