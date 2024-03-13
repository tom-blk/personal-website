import React from 'react'
import Image from 'next/image'

import CardWrapper from '../../generic/card-wrapper/CardWrapper.Component'

import { Article } from '@/app/types/AppTypes'
import Link from 'next/link'

interface Props{
		article: Article
}

const ArticleCard = ({article}: Props) => {
	const { title, description, articleUrl, imageUrl, publishedDate, platform } = article;

	return (
		<Link href={articleUrl} target='_blank'>
			<CardWrapper className={"p-6 grid gap-3 w-80"}>
				<div className={"h-20 flex gap-3"}>
					{
						imageUrl
						? <Image width={0} height={0} sizes='100vw' className={"w-auto h-auto"} src={imageUrl} alt={title}/>
						: <></>
					}
					<div>
						<h3>{title}</h3>
						<div className={"text-xs"}>Platform: {platform}</div>
						<div className={"text-xs"}>Published: {publishedDate}</div>
					</div>
				</div>
				<div className={"text-sm"}>Description</div>
				<div className={"text-xs"}>{description}</div>
			</CardWrapper>
		</Link>
	)
}

export default ArticleCard