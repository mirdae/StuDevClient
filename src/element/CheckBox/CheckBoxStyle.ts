import styled, { css } from 'styled-components'
import PALETTE from '../../styles/color-variables'

type SelectedType = {
  selected: boolean
}

export const Container = styled.div<SelectedType>`
  padding: 5px 10px;
  background-color: ${PALETTE.WHITE};
  font-size: 0.6em;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 1px solid ${PALETTE.WHITE};
  color: ${PALETTE.SUB_TEXT};
  cursor: pointer;
  &:hover {
    border: 1px solid ${PALETTE.POINT};
  }

  ${(props) =>
    props.selected
      ? css`
          background-color: ${PALETTE.POINT};
          color: ${PALETTE.WHITE};
        `
      : css`
          background-color: ${PALETTE.WHITE};
        `}
`
