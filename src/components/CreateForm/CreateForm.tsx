import React from 'react'
import * as S from './CreateFormStyle'

type CreateFormProps = {
  titleRef: any
  contentRef: any
}

function CreateForm({ titleRef, contentRef }: CreateFormProps) {
  return (
    <S.Container>
      <S.TitleInput placeholder="제목" type="text" ref={titleRef} />
      <S.ContentInput placeholder="내용" ref={contentRef} />
    </S.Container>
  )
}

export default React.memo(CreateForm)
