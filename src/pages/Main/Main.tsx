import React, { useEffect } from 'react'
import * as S from './MainStyle'
import { useDispatch } from 'react-redux'
import { Header } from '../../components/Header'
import { useCookies } from 'react-cookie'
import { requestGetAllPosts } from '../../modules/post'
import { CardList } from '../../components/CardList'

function Main() {
  const dispatch = useDispatch()
  const [cookies, a, b] = useCookies(['auth'])
  useEffect(() => {
    dispatch(requestGetAllPosts())
  }, [])

  return (
    <S.Container>
      <Header isAuth={!!cookies.auth} showMenu={true} isMain={true}></Header>
      <CardList />
    </S.Container>
  )
}

export default Main
