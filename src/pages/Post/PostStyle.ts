import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 7vh 0;
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`
export const RightMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
