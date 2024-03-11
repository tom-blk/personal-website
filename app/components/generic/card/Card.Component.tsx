import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode,
    className?: string
}

const Card = (props: Props) => {
    const {children, className} = props;

    return (
        <article className={`text-gray-300 border bg-black bg-opacity-60 border-slate-800 rounded-md ${className}`}>
            {children}
        </article>
    )
}

export default Card