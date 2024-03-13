import React, { ReactNode } from 'react'

interface Props {
    listName: string;
    children: ReactNode;
}

const ListWrapper = (props: Props) => {
    const { listName, children } = props;

  return (
    <div className={"grid gap-4"}>
        <div className={"font-bold"}>{listName}</div>
        <div className={"flex flex-wrap gap-3 w-full"}>
            {children}
        </div>
    </div>
  )
}

export default ListWrapper