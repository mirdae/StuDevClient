import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './HeaderStyle'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'

type HeaderProps = {
  isAuth: boolean
  isMain: boolean
  isSignPage: boolean
}

function Header({ isMain, isAuth, isSignPage }: HeaderProps) {
  console.log('isAuth', isAuth)
  return (
    <S.Container>
      <Link to="/">
        <S.Logo>StuDev</S.Logo>
      </Link>
      {isMain && (
        <S.Input>
          <SearchOutlinedIcon />
          <input type="text" placeholder="검색어를 입력하세요" />
        </S.Input>
      )}
      {!isSignPage &&
        (isAuth ? (
          <Link to="/create">
            <S.Menu>
              <AddCircleOutlineOutlinedIcon />
            </S.Menu>
          </Link>
        ) : (
          <Link to="/sign-in">
            <S.Menu>Sign In</S.Menu>
          </Link>
        ))}
    </S.Container>
  )
}

export default Header
