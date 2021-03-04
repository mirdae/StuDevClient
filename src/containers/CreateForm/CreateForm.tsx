import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { CreateForm } from '../../components/CreateForm'
import { changePostContent, changePostTitle } from '../../modules/post'

function CreateFormContainer() {
  const dispatch = useDispatch()
  const titleRef = useRef<HTMLInputElement>()
  const contentRef = useRef<HTMLInputElement>()

  const handleTitleInput = () => {
    console.log(titleRef.current?.value)
    console.log(titleRef.current)
    if (titleRef.current) {
      dispatch(changePostTitle(titleRef.current.value))
    }
  }

  const handleContentInput = () => {
    console.log(contentRef.current?.value)
    console.log(contentRef.current)
    if (contentRef.current) {
      dispatch(changePostContent(contentRef.current.value))
    }
  }
  useEffect(() => {
    console.log(titleRef.current)
    titleRef.current?.addEventListener('focusout', handleTitleInput)
    contentRef.current?.addEventListener('focusout', handleContentInput)
    //return titleRef.current?.removeEventListener('focusout', handleTitleInput)
  }, [])

  return <CreateForm titleRef={titleRef} contentRef={contentRef} />
}

export default CreateFormContainer
