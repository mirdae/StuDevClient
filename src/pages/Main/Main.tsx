import React, { useEffect } from 'react'
import * as S from './MainStyle'
import { useDispatch } from 'react-redux'
import { Header } from '../../components/Header'
import { useCookies } from 'react-cookie'
import { requestGetAllPosts } from '../../modules/post'
import { CardList } from '../../components/CardList'

function Main() {
  const dispatch = useDispatch()
  const [cookies, _, __] = useCookies(['auth'])
  useEffect(() => {
    dispatch(requestGetAllPosts())
  }, [])

  return (
    <S.Container>
      <Header isAuth={!!cookies.auth} isMain={true} isSignPage={false} />
      <CardList />
    </S.Container>
  )
}

export default Main
