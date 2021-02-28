import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;

  @media screen and (max-width: 978px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 678px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
