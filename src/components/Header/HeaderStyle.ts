import { Palette } from '@material-ui/icons'
import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'

export const Container = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${PALETTE.WHITE};
  display: flex;
  align-items: center;
`

export const Logo = styled.h3`
  position: fixed;
  top: 18px;
  left: 20vw;
  font-size: 24px;
  color: ${PALETTE.POINT};
  font-weight: 600;
`

export const Input = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 30px;
  font-size: 15px;
  border-radius: 50px;
  color: ${PALETTE.INPUT_BORDER};
  border: 1px solid ${PALETTE.INPUT_BORDER};
  background-color: ${PALETTE.BACKGROUND};
  display: flex;
  align-items: center;
  padding: 0 10px;
  input {
    background: none;
    padding: 0 10px;
  }
`

export const Menu = styled.div`
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  right: 20vw;
  top: 0;
  font-size: 1rem;
  width: 7vw;
  justify-content: space-between;
  color: ${PALETTE.POINT};
`

export const UserIcon = styled.div`
  position: relative;
`
