import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './PostButtonBoxStyle'
import { Button } from '../../element/Button'
import {
  requestParticipateApply,
  requestParticipateCancel,
} from '../../modules/post'
import { Participant } from '../Options/OptionsStyle'
import { PinDropSharp } from '@material-ui/icons'

type PostButtonBoxProps = {
  isWriter: boolean
  isParticipated: boolean
  postId: number
}

function PostButtonBox({
  isWriter,
  isParticipated,
  postId,
}: PostButtonBoxProps) {
  const dispatch = useDispatch()

  const handleParticipate = () => {
    // 로그인 안했을때 처리

    dispatch(requestParticipateApply(postId))
  }

  const handleCancelParticipate = () => {
    dispatch(requestParticipateCancel(postId))
  }

  const handleClick = () => {}

  return (
    <S.Container>
      {isWriter ? (
        <>
          <Button
            text="삭제하기"
            handleClick={handleClick}
            buttonType="submit"
          />
          <Button
            text="마감하기"
            handleClick={handleClick}
            buttonType="submit"
          />
        </>
      ) : isParticipated ? (
        <Button
          text="신청 취소하기"
          handleClick={handleCancelParticipate}
          buttonType="submit"
        />
      ) : (
        <Button
          text="신청하기"
          handleClick={handleParticipate}
          buttonType="submit"
        />
      )}
    </S.Container>
  )
}

export default React.memo(PostButtonBox)
