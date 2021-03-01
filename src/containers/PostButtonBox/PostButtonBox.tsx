import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './PostButtonBoxStyle'
import { Button } from '../../element/Button'
import {
  requestParticipateApply,
  requestParticipateCancel,
} from '../../modules/post'
import { RootState } from '../../modules'

type PostButtonBoxProps = {
  isWriter: boolean
  isParticipated: boolean
  postId: number
  isAuth: boolean
}

function PostButtonBox({
  isWriter,
  isParticipated,
  postId,
  isAuth,
}: PostButtonBoxProps) {
  const dispatch = useDispatch()

  const { participant_count_limit, participant } = useSelector(
    (state: RootState) => state.postDetailReducer
  )

  const handleParticipate = () => {
    // 로그인 안했을때 처리
    if (participant_count_limit <= participant.length) {
      return
    }
    if (isAuth) {
      dispatch(requestParticipateApply(postId))
    }
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
