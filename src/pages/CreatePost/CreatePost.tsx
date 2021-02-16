import React from 'react'
import * as S from './CreatePostStyle'
import { Header } from '../../components/Header'
import { CreateForm } from '../../containers/CreateForm'
import { Options } from '../../containers/Options'
import { CreatePostButton } from '../../containers/CreatePostButton'

function CreatePost() {
  return (
    <S.Container>
      <Header />
      <S.ContentBox>
        <CreateForm />
        <Options />
      </S.ContentBox>
      <CreatePostButton />
    </S.Container>
  )
}

export default CreatePost
