import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './CreatePostButtonStyle'
import { Button } from '../../element/Button'

function CreatePostButton() {
  const handleCreatePost = () => {}
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
