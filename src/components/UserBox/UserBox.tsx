import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from './UserBoxStyle'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'

function UserBox() {
  return (
    <S.Container>
      <S.Anchor />
      <S.List>
        <PersonOutlineOutlinedIcon style={{ fontSize: '17px' }} />
        Profile
      </S.List>
      <S.List>
        <DashboardOutlinedIcon style={{ fontSize: '17px' }} />
        Dashboard
      </S.List>
      <S.List>
        <ExitToAppOutlinedIcon style={{ fontSize: '17px' }} />
        Logout
      </S.List>
    </S.Container>
  )
}

export default UserBox
