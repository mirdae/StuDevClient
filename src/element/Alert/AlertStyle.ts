import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

export const Container = styled.div`
  width: 30vw;
  padding: 20px 0;
  background-color: ${PALETTE.WHITE};
  border-radius: ${BOX_STYLE.RADIUS};
  box-shadow: ${BOX_STYLE.SHADOW};
  text-align: center;
  color: ${PALETTE.POINT};
`
