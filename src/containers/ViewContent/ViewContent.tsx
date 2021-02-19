import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './ViewContentStyle'
import { ViewContent } from '../../components/ViewContent'

function PostContentContainer() {
  const { title, content, comment, created_at } = useSelector(
    (state) => state.postDetailReducer
  )

  return <ViewContent title={title} content={content} createdAt={created_at} />
}

export default PostContentContainer
