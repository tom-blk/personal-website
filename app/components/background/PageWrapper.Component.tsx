import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const PageWrapper = ({children} : Props) => {

    return (
        <div className={"w-full h-full overflow-auto bg-black bg-opacity-20"}>
            {children}
        </div>
    )
}

export default PageWrapper