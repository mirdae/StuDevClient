import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './PostButtonStyle'
import { Button } from '../../element/Button'

function PostButton() {
  const handleClick = () => {}
  return (
    <S.Container>
      <Button text="신청하기" handleClick={handleClick} buttonType="submit" />
    </S.Container>
  )
}

export default PostButton
