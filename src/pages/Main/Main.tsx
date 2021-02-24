import React, { useEffect } from 'react'
import * as S from './MainStyle'
import { useDispatch } from 'react-redux'
import { Header } from '../../components/Header'
import { useCookies } from 'react-cookie'
import { requestGetAllPosts } from '../../modules/post'
import { CardList } from '../../components/CardList'

type MainProps = {
  isAuth: boolean
  props: any
}

function Main({ isAuth, props }: MainProps) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestGetAllPosts())
  }, [])

  return (
    <S.Container>
      <Header isAuth={isAuth} isMain={true} isSignPage={false} />
      <CardList />
    </S.Container>
  )
}

export default Main
