import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import * as S from './PostStyle'
import { Header } from '../../components/Header'
import { ViewContent } from '../../containers/ViewContent'
import { Options } from '../../containers/Options'
import { PostButtonBox } from '../../containers/PostButtonBox'
import { requestGetPostDetail } from '../../modules/post'
import { CommentList } from '../../containers/CommentList'
import { CreateComment } from '../../components/CreateComment'

type PostProps = {
  props: any
}

function Post({ props }: PostProps) {
  const dispatch = useDispatch()

  const {
    topic_category,
    on_off_category,
    participant_count_limit,
    participant_count,
    participant,
    user_id: post_user_id,
    id: post_id,
  } = useSelector((state) => state.postDetailReducer)
  const user_id = useSelector((state) => state.userReducer.id)
  useEffect(() => {
    dispatch(requestGetPostDetail(props.match.params.id))
  }, [])

  return (
    <S.Container>
      <Header isMain={false} isSignPage={false} />
      <S.ContentBox>
        <S.LeftContent>
          <ViewContent />
          <CommentList />
          <CreateComment postId={post_id} />
        </S.LeftContent>
        <S.RightMenu>
          <Options
            type="read"
            topics={topic_category.split(',')}
            onOff={on_off_category.split(',')}
            participant_count_limit={participant_count_limit}
            participant_count={participant_count}
          />
          <PostButtonBox
            isWriter={post_user_id === user_id}
            isParticipated={participant.includes(user_id.toString())}
            postId={props.match.params.id}
            isAuth={!!user_id}
          />
        </S.RightMenu>
      </S.ContentBox>
    </S.Container>
  )
}

export default React.memo(Post)
