import styled, { css } from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

type VisibleType = {
  isVisible: boolean
}

export const Container = styled.div<VisibleType>`
  width: 25vw;
  padding: 20px 0;
  background-color: ${PALETTE.WHITE};
  border-radius: ${BOX_STYLE.RADIUS};
  box-shadow: ${BOX_STYLE.SHADOW};
  text-align: center;
  color: ${PALETTE.POINT};
  position: fixed;
  transition: 0.4s ease;
  ${(props) =>
    props.isVisible
      ? css`
          bottom: 10vh;
          right: 10vw;
        `
      : css`
          bottom: -20vh;
          right: 10vw;
        `}
`
