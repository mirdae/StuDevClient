import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main } from '../pages/Main'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { CreatePost } from '../pages/CreatePost'

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/create" component={CreatePost} />
    </Switch>
  )
}

export default AppRouter
