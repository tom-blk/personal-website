import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const PageWrapper = ({children} : Props) => {

    return (
        <div className={"grid justify-center px-2"}>
            {children}
        </div>
    )
}

export default PageWrapper