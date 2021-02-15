import React from 'react'
import * as S from './CreateFormStyle'

function CreateForm() {
  return (
    <S.Container>
      <S.TitleInput placeholder="제목" />
      <S.ContentInput placeholder="내용" />
    </S.Container>
  )
}

export default CreateForm
