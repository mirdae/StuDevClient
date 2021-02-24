import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withAuth from '../hoc/withAuth'
import { Main } from '../pages/Main'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { CreatePost } from '../pages/CreatePost'
import { Post } from '../pages/Post'

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={withAuth(Main, null)} />
      <Route path="/sign-up" component={withAuth(SignUp, false)} />
      <Route path="/sign-in" component={withAuth(SignIn, false)} />
      <Route path="/create" component={withAuth(CreatePost, true)} />
      <Route path="/post/:id" component={withAuth(Post, null)} />
    </Switch>
  )
}

export default AppRouter
