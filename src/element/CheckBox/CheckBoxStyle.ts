import styled, { css } from 'styled-components'
import PALETTE from '../../styles/color-variables'

type SelectedType = {
  selected: boolean
}

export const Container = styled.div<SelectedType>`
  padding: 5px 10px;
  background-color: ${PALETTE.WHITE};
  width: 70px;
  font-size: 0.5em;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 4px;
  cursor: pointer;
  &:hover {
    background-color: ${PALETTE.POINT};
  }

  ${(props) =>
    props.selected
      ? css`
          border: 1px solid ${PALETTE.POINT};
        `
      : css`
          border: 1px solid ${PALETTE.WHITE};
        `}
`
