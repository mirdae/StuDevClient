import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

export const Container = styled.div`
  width: 50%;
  min-height: 60vh;
  background-color: ${PALETTE.WHITE};
  margin-top: 10vh;
  border-radius: ${BOX_STYLE.RADIUS};
  box-shadow: ${BOX_STYLE.SHADOW};
  box-sizing: border-box;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  a {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: ${PALETTE.INPUT_TEXT};
  }
`
