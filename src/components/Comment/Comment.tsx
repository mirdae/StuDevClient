import React from 'react'
import * as S from './CommentStyle'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'

type CommentProps = {
  id: string
  comment: string
  user_id: number
  created_at: string
  updated_at?: string
  nickname: string
}

function Comment({
  id,
  comment,
  user_id,
  created_at,
  updated_at,
  nickname,
}: CommentProps) {
  return (
    <S.Container>
      <S.Info>
        <S.Anchor />
        <h3>{nickname}</h3>
        <S.Time>
          <CreateOutlinedIcon style={{ fontSize: 15 }} />
          <span>{created_at}</span>
        </S.Time>
      </S.Info>
      <S.Content>{comment}</S.Content>
    </S.Container>
  )
}

export default Comment
