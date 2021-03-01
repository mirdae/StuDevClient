import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

export const Container = styled.div`
  width: 20vw;
  min-width: 200px;
  height: 150px;
  background-color: ${PALETTE.WHITE};
  border-radius: ${BOX_STYLE.RADIUS};
  box-shadow: ${BOX_STYLE.SHADOW};
  padding: 20px;
  position: relative;
  margin: 20px auto;
  transition: color 0.5s ease-in-out;
  z-index: -1;
  cursor: pointer;
  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
  &:hover {
    h2 {
      color: ${PALETTE.POINT};
    }
  }

  @media screen and (max-width: 678px) {
    min-width: 300px;
  }
`
export const MiniInfo = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -40%;
`
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  span {
    margin-left: 10px;
  }
`
