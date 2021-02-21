import React from 'react'
import * as S from './ViewContentStyle'

type PostContentProps = {
  title: string
  content: string
  createdAt: string
}

function PostContent({ title, content, createdAt }: PostContentProps) {
  return (
    <S.Container>
      <S.TextBox>
        <S.ContentBox>
          <S.Title>
            <span>{title}</span>
            <p>{createdAt}</p>
          </S.Title>
          <S.Content>{content}</S.Content>
        </S.ContentBox>
      </S.TextBox>
    </S.Container>
  )
}

export default PostContent
