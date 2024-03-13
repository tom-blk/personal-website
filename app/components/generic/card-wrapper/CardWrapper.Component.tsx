import React, { ReactNode } from 'react'

import './CardWrapper.Styles.css'

interface Props{
    children: ReactNode,
    className?: string
}

const CardWrapper = (props: Props) => {
    const {children, className} = props;

    return (
        <article className={"relative text-gray-300 border border-slate-800 rounded-md card-wrapper-background"}>
            <div className={`z-10 relative ${className}`}>
                {children}
            </div>
        </article>
    )
}

export default CardWrapper