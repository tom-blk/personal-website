import React from 'react'

import ArticleCard from '../../cards/article-card/ArticleCard.Component'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'

import { articles } from '@/app/data/articles'

const ArticlesList = () => {
  return (
    <ListWrapper listName='Articles'>
      {
        articles.map((article, index) => (
          <ArticleCard key={index} article={article}/>
        ))
      }
    </ListWrapper>
  )
}

export default ArticlesList