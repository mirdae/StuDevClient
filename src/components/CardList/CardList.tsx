import React from 'react'
import * as S from './CardListStyle'
import { useSelector } from 'react-redux'
import { PostState } from '../../modules/post'

import { Card } from '../Card'

function CardList() {
  const posts = useSelector((state: any) => state.postReducer.posts)

  return (
    <S.Container>
      {posts.map((post: PostState) => (
        <Card key={post.id} {...post} />
      ))}
    </S.Container>
  )
}

export default CardList
