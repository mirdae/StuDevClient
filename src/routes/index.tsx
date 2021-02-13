import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main } from '../pages/Main'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
  )
}

export default AppRouter
