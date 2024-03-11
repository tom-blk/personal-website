import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode,
    className?: string
}

const MiniCard = (props: Props) => {
    const {children, className} = props;

    return (
        <article className={`text-gray-300 bg-gray-200 bg-opacity-5 rounded-sm ${className}`}>
            {children}
        </article>
    )
}

export default MiniCard