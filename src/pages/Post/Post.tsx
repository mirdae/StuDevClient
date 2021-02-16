import React, { useEffect } from 'react'
import * as S from './PostStyle'
import { Header } from '../../components/Header'
import { PostContent } from '../../containers/PostContent'
import { Options } from '../../containers/Options'
import { PostButton } from '../../containers/PostButton'

function Post() {
  useEffect(() => {
    console.log(123)
  })

  return (
    <S.Container>
      <Header />
      <S.ContentBox>
        <PostContent />
        <S.RightMenu>
          <Options />
          <PostButton />
        </S.RightMenu>
      </S.ContentBox>
    </S.Container>
  )
}

export default Post
