import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

export const Container = styled.div`
  width: 200px;
  height: 130px;
  background-color: ${PALETTE.WHITE};
  position: absolute;
  top: 60px;
  right: -25px;
  border-radius: ${BOX_STYLE.RADIUS};
  box-shadow: ${BOX_STYLE.SHADOW};
  z-index: 999 !important;
`
export const Anchor = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${PALETTE.WHITE};
  top: 20px;
  right: 20px;
  position: absolute;
  top: -5px;
  transform: rotate(45deg);
  z-index: -1;
`

export const List = styled.div`
  color: black;
  display: flex;
  align-items: center;
  z-index: 5;
  margin: 20px 0;
  font-size: 15px;
  cursor: pointer;
  svg {
    margin: 0 20px;
  }
`
