import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'

export const Container = styled.div`
  width: 23%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const OptionBox = styled.div`
  width: 90%;
  border-bottom: 1px solid ${PALETTE.INPUT_BORDER};
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`
export const Icon = styled.div`
  font-size: 9px;
  width: 30%;
  color: ${PALETTE.INPUT_TEXT};
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`

export const Topic = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const OnOff = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
`
export const Participant = styled.div`
  width: 70%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 50%;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
  }
  span {
    font-size: 13px;
    margin-left: 10px;
  }
`
