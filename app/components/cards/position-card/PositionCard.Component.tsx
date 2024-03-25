import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CardWrapper from '../../wrappers/card-wrapper/CardWrapper.Component'
import TechnologyLogoList from '../../lists/technology-logo-list/TechnologyLogoList.Component'

import { Position } from '@/app/types/AppTypes'

interface Props{
		position: Position
}

const PositionCard = ({position}: Props) => {
	const { company, companyLogo, linkedInUrl, name, technologies, joinedDate, leftDate } = position;

	return (
		<Link href={linkedInUrl} target='_blank'>
			<CardWrapper className={"p-6 grid gap-3 w-72 lg:p-8 lg:w-96"}>
				<div className={"h-20 flex gap-3 lg:h-24"}>
					{
						companyLogo
						? <Image width={0} height={0} sizes='100vw' className={"w-auto h-auto"} src={companyLogo} alt={company}/>
						: <></>
					}
					<div>
						<h3 className={"lg:text-xl"}>{company}</h3>
						<div className={"text-sm font-bold lg:text-base"}>{name}</div>
						<div className={"text-xs lg:text-sm"}>Start: {joinedDate} End: {leftDate}</div>
					</div>
				</div>
				<div className={"text-xs lg:text-base"}>Technologies Used: </div>
				<TechnologyLogoList tailwindColumns={"grid-cols-8"} tailwindColumnsLarge={"lg:grid-cols-7"} technologies={technologies}/>
			</CardWrapper>
		</Link>
	)
}

export default PositionCard