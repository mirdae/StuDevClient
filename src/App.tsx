import React from 'react'
import AppRouter from './routes'
import GlobalStyle from './styles/GlobalStyle'

export const App: React.FC<{}> = () => (
  <>
    <GlobalStyle />
    <AppRouter />
  </>
)
