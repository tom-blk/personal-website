import Link from 'next/link';
import React from 'react'

interface Props{
    textSize?: "sm" | "xs";
    location: string;
    locationLink: string; 
}

const returnSize = (textSize?: string) => {
    switch (textSize) {
        case undefined:
            return "w-6 h-6"
        case "sm":
            return "w-5 h-5"
        case "xs":
            return "w-4 h-4"
    }
}

const LocationPin = ({location, locationLink, textSize}: Props) => {
  return (
    <Link target="_blank" href={locationLink} className={'flex gap-1 align-middle'}>
        <svg
            className={`${returnSize(textSize)}relative top-0.5`}
            fill="#C5180D"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
            d="M12 0C7.31 0 3 4.31 3 9c0 5.25 9 15 9 15s9-9.75 9-15c0-4.69-4.31-9-9-9zm0 13c-2.75 0-5-2.25-5-5s2.25-5 5-5 5 2.25 5 5-2.25 5-5 5z"
            />
        </svg>
        <p className={`text-${textSize}`}>{location}</p>
    </Link>
  )
}

export default LocationPin