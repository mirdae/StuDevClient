import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'

export const Container = styled.div`
  width: 374px;
  height: 50px;
  border: 1px solid ${PALETTE.INPUT_BORDER};
  border-radius: 10px;
  margin: 15px 0;
  display: flex;
`

export const Icon = styled.div`
  height: 50px;
  width: 67px;
  border-right: 1px solid ${PALETTE.INPUT_BORDER};
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${PALETTE.INPUT_TEXT};
  }
`
export const Input = styled.input`
  box-sizing: border-box;
  padding: 0 30px;
  font-weight: 500;
  font-size: 14px;
  color: ${PALETTE.INPUT_TEXT};
`
