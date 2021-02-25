import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'

export const Container = styled.div`
  width: 90%;
  margin: 20px 0;
  background-color: ${PALETTE.WHITE};
  border-radius: 10px;
`

export const Anchor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${PALETTE.WHITE};
  position: absolute;
  top: -10px;
  left: 20px;
  transform: rotate(45deg);
`

export const Info = styled.div`
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid ${PALETTE.INPUT_BORDER};
  display: flex;
  justify-content: space-between;
  position: relative;
  color: ${PALETTE.MAIN_TEXT};
  h3 {
    color: ${PALETTE.MAIN_TEXT};
  }
`

export const Time = styled.div`
  font-size: 9px;
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 20px 25px;
  color: ${PALETTE.SUB_TEXT};
  box-sizing: border-box;
  font-size: 10px;
`
