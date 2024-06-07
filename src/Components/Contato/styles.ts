import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Contatos'

type TagStatus = {
  status?: string
}

function returnBackroundColor(props: TagStatus): string {
  if (props.status === 'normal') {
    return variables.normalCardBackground
  } else {
    return variables.favoritoCardBackground
  }
}

export const Card = styled.div<TagStatus>`
  background-color: ${(props) => returnBackroundColor(props)};
  display: flex;
  padding: 24px;
  color: ${variables.normalCardColor};
  border-radius: 16px;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const PhotoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Photo = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 50%;
  border: solid 2px ${variables.normalCardBorderColor};
`

export const Info = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
`

export const Nome = styled.input`
  background: transparent;
  padding: 8px;
  border: none;
  border-bottom: solid 2px #fff;
  color: #000;
  font-size: 1.3em;
  font-weight: 700;

  &:disabled {
    color: #000;
    border: none;
  }
`

export const PhoneArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
export const PhoneImg = styled.img`
  width: 24px;
  margin-right: 16px;
`

export const Phone = styled.input`
  background: transparent;
  padding: 8px;
  border: none;
  border-bottom: solid 2px #fff;
  color: #000;
  font-size: 1em;

  &:disabled {
    color: #000;
    border: none;
  }
`
export const MailArea = styled.div`
  display: flex;
  align-items: center;
`
export const MailImg = styled.img`
  width: 24px;
  margin-top: 8px;
  margin-right: 16px;
`

export const Mail = styled.input`
  background: transparent;
  padding: 8px;
  border: none;
  border-bottom: solid 2px #fff;
  color: #000;
  font-size: 1em;

  &:disabled {
    color: #000;
    border: none;
  }
`

export const buttons = styled.div`
  text-align: right;
  width: 100%;
  justify-content: right;

  img {
    width: 24px;
    margin-left: 16px;
    cursor: pointer;
  }
`

export const importante = styled.div`
  display: flex;
  height: 100%;
  justify-content: right;
  align-items: end;
  padding-bottom: 24px;

  span  {
    padding: 8px;
    font-weight: 700;
    background-color: #EDF0DA;
    border-radius: 8px;
  }
  }
`
