import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CommentList } from '../../components/CommentList'
import { showAlert, hideAlert } from '../../modules/alert'
import { RootState } from '../../modules'

function CommentListContainer() {
  const dispatch = useDispatch()
  const postComments = useSelector(
    (state: RootState) => state.postDetailReducer.comments
  )
  const isMounted = useRef(false)

  useEffect(() => {
    console.log(isMounted.current, postComments.length)
    if (!postComments.length) {
      return
    }
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    dispatch(showAlert('댓글이 생성되었습니다.'))
    setTimeout(() => {
      dispatch(hideAlert(''))
    }, 2000)
  }, [postComments])

  return <CommentList comments={postComments} />
}

export default CommentListContainer
