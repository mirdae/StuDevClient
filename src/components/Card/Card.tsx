import React from 'react'
import * as S from './CardStyle'
import { PostState } from '../../modules/post'
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'

type CardProps = PostState
function Card({
  title,
  participant_count_limit,
  participant_count,
  views,
}: CardProps) {
  return (
    <S.Container>
      <h2>{title}</h2>
      <S.MiniInfo>
        <S.IconBox>
          <PersonOutlinedIcon style={{ fontSize: '18' }} />
          <span>{`${participant_count} / ${participant_count_limit}`}</span>
        </S.IconBox>
        <S.IconBox>
          <VisibilityOutlinedIcon style={{ fontSize: '18' }} />
          <span>{views}</span>
        </S.IconBox>
      </S.MiniInfo>
    </S.Container>
  )
}

export default Card
