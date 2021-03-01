import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CommentList } from '../../components/CommentList'
import { RootState } from '../../modules'

function CommentListContainer() {
  const postComments = useSelector(
    (state: RootState) => state.postDetailReducer.comments
  )

  return <CommentList comments={postComments} />
}

export default CommentListContainer
