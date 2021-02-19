import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main } from '../pages/Main'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { CreatePost } from '../pages/CreatePost'
import { Post } from '../pages/Post'

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/create" component={CreatePost} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  )
}

export default AppRouter
