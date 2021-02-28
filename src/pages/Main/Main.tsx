import React, { useEffect } from 'react'
import * as S from './MainStyle'
import { useDispatch } from 'react-redux'
import { Header } from '../../components/Header'
import { useCookies } from 'react-cookie'
import { requestGetPosts } from '../../modules/post'
import { CardList } from '../../components/CardList'

type MainProps = {
  props: any
}

function Main({ props }: MainProps) {
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

export default React.memo(Main)
