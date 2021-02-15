import React from 'react'
import * as S from './CreatePostStyle'
import { Header } from '../../components/Header'
import { CreateForm } from '../../components/CreateForm'
import { Options } from '../../components/Options'

function CreatePost() {
  return (
    <S.Container>
      <Header />
      <S.ContentBox>
        <CreateForm />
        <Options />
      </S.ContentBox>
    </S.Container>
  )
}

export default CreatePost
