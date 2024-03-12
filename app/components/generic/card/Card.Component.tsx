import React, { ReactNode } from 'react'
import GradientBackground from '../gradient-background/GradientBackground.Component';

interface Props{
    children: ReactNode,
    className?: string
}

const Card = (props: Props) => {
    const {children, className} = props;

    return (
        <article className={"relative text-gray-300 border bg-black bg-opacity-60 border-slate-800 rounded-md"}>
            <div className={`z-10 relative ${className}`}>
                {children}
            </div>
            <GradientBackground/>
        </article>
    )
}

export default Card