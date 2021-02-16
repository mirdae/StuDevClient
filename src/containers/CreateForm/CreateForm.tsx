import React, { useState } from 'react'
import { CreateForm } from '../../components/CreateForm'

function CreateFormContainer() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  return <CreateForm />
}

export default CreateFormContainer
