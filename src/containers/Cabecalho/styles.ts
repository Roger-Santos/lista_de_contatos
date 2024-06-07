import styled from 'styled-components'
import variables from '../../styles/variables'

export const Header = styled.header`
  weight: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #35374b;
  padding: 24px;

  h1 {
    color: ${variables.cabecalhoColorText};
  }
`
