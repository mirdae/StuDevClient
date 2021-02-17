import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import { useCookies } from 'react-cookie'

function Main() {
  const [cookies, a, b] = useCookies(['auth'])
  useEffect(() => {
    console.log(cookies.auth)
  }, [])

  return <Header isAuth={!!cookies.auth} showMenu={true} isMain={true}></Header>
}

export default Main
