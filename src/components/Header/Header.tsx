import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './HeaderStyle'
import { UserBox } from '../UserBox'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

type HeaderProps = {
  isMain: boolean
  isSignPage: boolean
}

function Header({ isMain, isSignPage }: HeaderProps) {
  const [showUserBox, setShowUserBox] = useState<Boolean>(false)
  const isAuth = !!useSelector((state) => state.userReducer.id)

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
          <S.Menu>
            <TuneOutlinedIcon />
            <Link to="/create">
              <AddCircleOutlineOutlinedIcon />
            </Link>
            <S.UserIcon onClick={() => setShowUserBox(!showUserBox)}>
              <AccountCircleOutlinedIcon />
              {showUserBox && <UserBox />}
            </S.UserIcon>
          </S.Menu>
        ) : (
          <Link to="/sign-in">
            <S.Menu>Sign In</S.Menu>
          </Link>
        ))}
    </S.Container>
  )
}

export default React.memo(Header)
