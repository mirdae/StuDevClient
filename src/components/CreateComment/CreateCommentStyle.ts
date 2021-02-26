import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

export const Container = styled.div`
  width: 90%;
  background-color: ${PALETTE.WHITE};
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: ${BOX_STYLE.RADIUS};
  box-shadow: ${BOX_STYLE.SHADOW};
`
export const ButtonBox = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-end;
`
export const Comment = styled.textarea`
  background-color: ${PALETTE.INPUT_BORDER};
  resize: vertical;
  padding: 20px;
`
