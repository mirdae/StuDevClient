import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'

export const Container = styled.div`
  width: 40%;
  padding: 30px;
  border-right: 1px solid ${PALETTE.INPUT_BORDER};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleInput = styled.input`
  width: 80%;
  border-radius: 20px;
  background-color: ${PALETTE.WHITE};
  padding: 12px 20px;
  font-size: 0.8rem;
  color: ${PALETTE.MAIN_TEXT};
  &::placeholder {
    color: ${PALETTE.MAIN_TEXT};
  }
`
export const ContentInput = styled.textarea`
  width: 80%;
  border-radius: 20px;
  min-height: 40vh;
  margin-top: 30px;
  background-color: ${PALETTE.WHITE};
  padding: 20px;
  font-size: 0.7rem;
  color: ${PALETTE.SUB_TEXT};
  resize: none;
  &::placeholder {
    color: ${PALETTE.SUB_TEXT};
  }
`
