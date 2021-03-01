import React, { useEffect } from 'react'
import * as S from './MainStyle'
import { useDispatch } from 'react-redux'
import { Header } from '../../components/Header'
import { requestGetPosts } from '../../modules/post'
import { CardList } from '../../components/CardList'

function Main() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestGetPosts())
  }, [])

  return (
    <S.Container>
      <Header isMain={true} isSignPage={false} />
      <CardList />
    </S.Container>
  )
}

export default Main
