import React, { useState } from 'react'
import * as S from './PostContentStyle'
import { PostContent } from '../../components/PostContent'
import { CommentList } from '../../components/CommentList'

function PostContentContainer() {
  return (
    <S.Container>
      <PostContent />
      <CommentList />
    </S.Container>
  )
}

export default PostContentContainer
