import React from 'react'
import Image from 'next/image'

import CardWrapper from '../../generic/card-wrapper/CardWrapper.Component'
import TechnologyLogoList from '../../lists/technology-logo-list/TechnologyLogoList.Component'

import { Position } from '@/app/types/AppTypes'
import Link from 'next/link'

interface Props{
		position: Position
}

const PositionCard = ({position}: Props) => {
	const { company, companyLogo, linkedInUrl, name, technologies, joinedDate, leftDate } = position;

	return (
		<Link href={linkedInUrl} target='_blank'>
			<CardWrapper className={"p-6 grid gap-3 w-80"}>
				<div className={"h-20 flex gap-3"}>
					{
						companyLogo
						? <Image width={0} height={0} sizes='100vw' className={"w-auto h-auto"} src={companyLogo} alt={company}/>
						: <></>
					}
					<div>
						<h3>{company}</h3>
						<div className={"text-xs font-bold"}>{name}</div>
						<div className={"text-xs"}>Start: {joinedDate} End: {leftDate}</div>
					</div>
				</div>
				<div className={"text-xs"}>Technologies Used: </div>
				<TechnologyLogoList columns={6} technologies={technologies}/>
			</CardWrapper>
		</Link>
	)
}

export default PositionCard