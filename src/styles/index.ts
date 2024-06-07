import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;  
  }
`

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

export default GlobalStyle
