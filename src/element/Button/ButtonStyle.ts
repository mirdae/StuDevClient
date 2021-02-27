import styled, { css } from 'styled-components'
import PALETTE from '../../styles/color-variables'

type ButtonProps = {
  buttonType: 'submit' | 'cancel'
}
export const Container = styled.button<ButtonProps>`
  padding: 0 2rem;
  height: 3rem;
  border-radius: 50px;
  font-size: 0.8rem;
  margin: 20px 10px;
  cursor: pointer;
  ${(props) =>
    props.buttonType === 'submit'
      ? css`
          background-color: ${PALETTE.POINT};
          color: ${PALETTE.WHITE};
        `
      : css`
          background-color: ${PALETTE.WHITE};
          color: ${PALETTE.POINT};
        `}
`
