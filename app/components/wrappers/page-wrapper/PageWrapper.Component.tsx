import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const PageWrapper = ({children} : Props) => {

    return (
        <div className={"max-w-screen-lg bg-black bg-opacity-40"}>
            {children}
        </div>
    )
}

export default PageWrapper