'use client'
import React, { ReactNode, useEffect } from 'react'

interface Props {
    listName: string;
    children: ReactNode;
}

const ListWrapper = (props: Props) => {
  const { listName, children } = props;

  useEffect(() => {
    console.log(children)
  }, [])

  return (
    <>
      <div className={"grid gap-4"}>
        <div className={"font-bold"}>{listName}</div>
        {children}
      </div>
    </>
  )
}

export default ListWrapper