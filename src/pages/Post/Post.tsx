import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import * as S from './PostStyle'
import { Header } from '../../components/Header'
import { ViewContent } from '../../containers/ViewContent'
import { Options } from '../../containers/Options'
import { PostButton } from '../../containers/PostButton'
import { requestGetPostDetail } from '../../modules/post'

function Post(props: any) {
  const dispatch = useDispatch()

  const [cookies, _, __] = useCookies(['auth'])
  const {
    topic_category,
    on_off_category,
    participant_count_limit,
    participant_count,
  } = useSelector((state) => state.postDetailReducer)

  useEffect(() => {
    dispatch(requestGetPostDetail(props.match.params.id))
  }, [])

  return (
    <S.Container>
      <Header isAuth={!!cookies.auth} isMain={false} isSignPage={false} />
      <S.ContentBox>
        <ViewContent />
        <S.RightMenu>
          <Options
            type="read"
            topics={topic_category.split(',')}
            onOff={on_off_category.split(',')}
            participant_count_limit={participant_count_limit}
            participant_count={participant_count}
          />
          <PostButton />
        </S.RightMenu>
      </S.ContentBox>
    </S.Container>
  )
}

export default withRouter(Post)
