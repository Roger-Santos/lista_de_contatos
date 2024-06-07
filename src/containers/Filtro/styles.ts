import styled from 'styled-components'
import variables from '../../styles/variables'

export const AreaFiltro = styled.div`
  padding: 24px;

  h3 {
    color: #35374b;
  }

  hr {
    border: none;
    height: 2px;
    background-color: #ebf0f6;
    margin: 16px 0;
  }

  span {
    background-color: #ebf0f6;
    border-radius: 8px;
    color: #000;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: #fe7272;
    }
  }
`

export const Field = styled.input`
  width: 200px;
  border: none;
  border-bottom: 2px solid #ebf0f6;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-right: 16px;
`

export const Button = styled.button`
  width: 150px;
  padding: 8px;
  border: none;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`

export default AreaFiltro
