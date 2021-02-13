import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${PALETTE.WHITE};
`

export const Logo = styled.h3`
  position: fixed;
  top: 18px;
  left: 50px;
  font-size: 24px;
  color: ${PALETTE.POINT};
  font-weight: 600;
`
