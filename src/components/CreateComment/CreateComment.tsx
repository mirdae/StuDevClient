import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './CreateCommentStyle'
import { Button } from '../../element/Button'
import { requestCreateComment } from '../../modules/post'

type CreateCommentProps = {
  postId: string
}

function CreateComment({ postId }: CreateCommentProps) {
  const dispatch = useDispatch()
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const handleSubmit = () => {
    if (commentRef.current.value === '') {
      // 댓글 입력하라는 알림창뜨게해야됨
      return
    }
    const commentInfo = {
      post_id: parseInt(postId),
      comment: commentRef.current.value,
    }
    dispatch(requestCreateComment(commentInfo))
  }
  return (
    <S.Container>
      <S.Comment placeholder="댓글을 입력하세요" ref={commentRef}></S.Comment>
      <S.ButtonBox>
        <Button
          text="댓글작성"
          handleClick={handleSubmit}
          buttonType="submit"
        />
      </S.ButtonBox>
    </S.Container>
  )
}

export default CreateComment
