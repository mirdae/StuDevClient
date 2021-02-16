import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

export const Container = styled.div`
  width: 40%;
  background-color: ${PALETTE.WHITE};
  margin-top: 15vh;
  border-radius: ${BOX_STYLE.RADIUS};
  box-shadow: ${BOX_STYLE.SHADOW};
  box-sizing: border-box;
  padding: 40px 0;
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
