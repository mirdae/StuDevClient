import React from 'react'
import { useSelector } from 'react-redux'
import { ViewContent } from '../../components/ViewContent'
import { RootState } from '../../modules'

function PostContentContainer() {
  const { title, content, created_at } = useSelector(
    (state: RootState) => state.postDetailReducer
  )

  return <ViewContent title={title} content={content} createdAt={created_at} />
}

export default PostContentContainer
