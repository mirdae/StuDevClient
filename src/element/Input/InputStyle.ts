import styled, { css } from 'styled-components'
import PALETTE from '../../styles/color-variables'

type NoticeType = {
  notice: 'correct' | 'incorrect' | 'none'
}

export const Container = styled.div<NoticeType>`
  width: 374px;
  height: 50px;
  border-radius: 10px;
  margin: 15px 0;
  display: flex;
  position: relative;
  ${(props) =>
    props.notice === 'correct'
      ? css`
          border: 1px solid ${PALETTE.GREEN};
        `
      : props.notice === 'incorrect'
      ? css`
          border: 1px solid ${PALETTE.RED};
        `
      : css`
          border: 1px solid ${PALETTE.INPUT_BORDER};
        `}
`

export const Icon = styled.div`
  height: 48px;
  width: 67px;
  border-right: 1px solid ${PALETTE.INPUT_BORDER};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${PALETTE.INPUT_TEXT};
  }
`
export const Input = styled.input`
  box-sizing: border-box;
  padding: 0 30px;
  font-weight: 500;
  font-size: 14px;
  color: ${PALETTE.INPUT_TEXT};
  &::placeholder {
    color: ${PALETTE.INPUT_TEXT};
  }
`

export const Alert = styled.div`
  position: absolute;
  bottom: -15px;
  left: 70px;
  color: ${PALETTE.RED};
  font-size: 9px;
`
