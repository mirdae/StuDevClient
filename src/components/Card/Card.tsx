import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './CardStyle'
import { PostState } from '../../modules/post'
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'

type CardProps = {
  id?: number
  title: string
  participant_count_limit: number
  participant_count?: number
  views?: number
}

function Card({
  id,
  title,
  participant_count_limit,
  participant_count,
  views,
}: CardProps) {
  return (
    <Link to={`/post/${id}`}>
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
    </Link>
  )
}

export default React.memo(Card)
