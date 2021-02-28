import React, { useEffect } from 'react'
import * as S from './MainStyle'
import { useDispatch } from 'react-redux'
import { Header } from '../../components/Header'
import { useCookies } from 'react-cookie'
import { requestGetAllPosts } from '../../modules/post'
import { CardList } from '../../components/CardList'

type MainProps = {
  props: any
}

function Main({ props }: MainProps) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestGetAllPosts())
  }, [])

  return (
    <S.Container>
      <Header isMain={true} isSignPage={false} />
      <CardList />
    </S.Container>
  )
}

export default Main
