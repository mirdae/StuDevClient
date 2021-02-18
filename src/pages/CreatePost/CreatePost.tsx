import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import * as S from './CreatePostStyle'
import { Header } from '../../components/Header'
import { CreateForm } from '../../containers/CreateForm'
import { Options } from '../../containers/Options'
import { CreatePostButton } from '../../containers/CreatePostButton'

const topics = [
  '백엔드',
  '프론트엔드',
  '프로젝트',
  '모바일',
  'CS',
  '프로그래밍언어',
]
const onOff = ['온라인', '오프라인']

function CreatePost(props: any) {
  const [cookies, _, __] = useCookies(['auth'])
  useEffect(() => {
    if (!cookies.auth) {
      console.log(!cookies.auth)
      // 쿠키가 없을때
      props.history.push('/')
    }
  }, [])
  return (
    <S.Container>
      <Header isAuth={!!cookies} isMain={false} isSignPage={false} />
      <S.ContentBox>
        <CreateForm />
        <Options topics={topics} onOff={onOff} type="write" />
      </S.ContentBox>
      <CreatePostButton />
    </S.Container>
  )
}

export default CreatePost
