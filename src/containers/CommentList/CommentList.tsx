import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CommentList } from '../../components/CommentList'

function CommentListContainer() {
  const postComments = useSelector((state) => state.postDetailReducer.comments)

  return <CommentList comments={postComments} />
}

export default CommentListContainer
