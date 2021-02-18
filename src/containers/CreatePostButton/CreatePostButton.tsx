import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './CreatePostButtonStyle'
import { Button } from '../../element/Button'
import { requestCreatePost } from '../../modules/post'

function CreatePostButton() {
  const dispatch = useDispatch()
  const postInfo = useSelector((state) => state.createPostReducer)

  const handleCreatePost = () => {
    dispatch(requestCreatePost(postInfo))
  }
  return (
    <S.Container>
      <Link to="/">
        <Button text="취소하기" buttonType="cancel"></Button>
      </Link>
      <Button
        text="등록하기"
        handleClick={handleCreatePost}
        buttonType="submit"
      ></Button>
    </S.Container>
  )
}

export default CreatePostButton
