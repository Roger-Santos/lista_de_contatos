import styled from 'styled-components'
import variables from '../../styles/variables'

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

export const AreaTitulo = styled.div`
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
`

export const Card = styled.div<TagStatus>`
  background-color: ${(props) => returnBackroundColor(props)};
  display: flex;
  padding: 24px;
  color: ${variables.normalCardColor};
  border-radius: 16px;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.5s ease;
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
  cursor: pointer;

  &:hover {
    border: solid 2px #ffc96f;
    filter: brightness(75%);
  }
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
`

export const Importante = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: right;
  align-items: end;
  padding-bottom: 24px;

  span {
    padding: 8px;
    font-weight: 700;
    background-color: #eeeeee;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      border: solid 2px #ffc96f;
      filter: brightness(75%);
    }
  }
`

export const Button = styled.button`
  width: 150px;
  background-color: #35374b;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  margin-top: 16px;
  margin-right: 16px;

  &:hover {
    filter: brightness(150%);
  }
`
