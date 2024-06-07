import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { Status } from '../../utils/enums/Contatos'
import { createNew } from '../../store/reducers/contato'

const NovoContato = () => {
  const [imagem, setimagem] = useState(
    'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png'
  )
  const [nomeCompleto, setNome] = useState('')
  const [telefone, setTel] = useState('')
  const [email, setMail] = useState('')
  const [status, setStat] = useState(Status.NORMAL)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function alteraFoto() {
    const caminho = prompt('Insira o link da foto: ')

    if (caminho != null && caminho != '') {
      setimagem(caminho)
    }
  }

  function alteraStatus() {
    if (status === Status.NORMAL) {
      setStat(Status.FAVORITO)
    } else {
      setStat(Status.NORMAL)
    }
  }

  function salvar() {
    if (nomeCompleto != '' && telefone != '' && email != '') {
      dispatch(createNew({ nomeCompleto, telefone, email, status, imagem }))
      navigate('/')
    } else {
      alert('Prencha as informações do contato!')
    }
  }

  function cancelar() {
    if (nomeCompleto != '' || telefone != '' || email != '') {
      const answer = window.confirm('Este contato não será salvo!')
      if (answer) {
        navigate('/')
      }
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <S.AreaTitulo>
        <h3>Adicionar novo contanto</h3>
        <hr />
      </S.AreaTitulo>
      <S.Card status={status}>
        <S.PhotoArea>
          <S.Photo src={imagem} onClick={alteraFoto} />
        </S.PhotoArea>
        <S.Info>
          <S.Nome
            placeholder="Nome completo"
            onChange={(event) => setNome(event.target.value)}
          />
          <S.PhoneArea>
            <S.PhoneImg src={require('../../assets/img/phone.png')} />
            <S.Phone
              placeholder="Telefone"
              onChange={(event) => setTel(event.target.value)}
            />
          </S.PhoneArea>
          <S.MailArea>
            <S.MailImg src={require('../../assets/img/mail.png')} />
            <S.Mail
              placeholder="E-mail"
              onChange={(event) => setMail(event.target.value)}
            />
          </S.MailArea>
        </S.Info>
        <S.Importante onClick={() => alteraStatus()}>
          <span>Favorito</span>
        </S.Importante>
      </S.Card>
      <S.Button onClick={() => salvar()}>Salvar</S.Button>
      <S.Button onClick={() => cancelar()}>Cancelar</S.Button>
    </>
  )
}

export default NovoContato
