import React, { useState } from 'react'
import * as S from './CommentListStyle'
import { Comment } from '../Comment'

type CommentListProps = {
  comments: []
}
function CommentList({ comments }: CommentListProps) {
  return (
    <S.Container>
      {comments && comments.length !== 0
        ? comments.map((comment) => <Comment key={comment.id} {...comment} />)
        : '댓글 없다는거 알려주기'}
    </S.Container>
  )
}

export default CommentList
