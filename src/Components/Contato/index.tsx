import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ContatoClass from '../../models/Contato'
import * as S from './styles'
import { remove, edit } from '../../store/reducers/contato'
import { Status } from '../../utils/enums/Contatos'

type Props = ContatoClass

const Contato = ({
  id,
  nomeCompleto: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  status: statusOriginal,
  imagem: imagemOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [nomeCompleto, setNome] = useState('')
  const [telefone, setTel] = useState('')
  const [email, setMail] = useState('')
  const [status, setStat] = useState(Status.NORMAL)
  const [imagem, setImagem] = useState('')

  useEffect(() => {
    setNome(nomeOriginal)
    setTel(telefoneOriginal)
    setMail(emailOriginal)
    setStat(statusOriginal)
    setImagem(imagemOriginal)
  }, [
    nomeOriginal,
    telefoneOriginal,
    emailOriginal,
    statusOriginal,
    imagemOriginal
  ])

  function cancelEdition() {
    if (
      nomeOriginal === nomeCompleto &&
      telefoneOriginal === telefone &&
      emailOriginal === email &&
      statusOriginal === status &&
      imagemOriginal === imagem
    ) {
      setEditing(false)
    } else {
      const answer = window.confirm('Deseja descartar as alterações?')
      if (answer) {
        setEditing(false)
        setNome(nomeOriginal)
        setTel(telefoneOriginal)
        setMail(emailOriginal)
        setStat(statusOriginal)
        setImagem(imagemOriginal)
      }
    }
  }

  function saveEdition() {
    if (
      nomeOriginal === nomeCompleto &&
      telefoneOriginal === telefone &&
      emailOriginal === email &&
      statusOriginal === status &&
      imagemOriginal === imagem
    ) {
      setEditing(false)
    } else {
      const answer = window.confirm('Salvar as alterações?')
      if (answer) {
        setEditing(false)
        nomeOriginal = nomeCompleto
        telefoneOriginal = telefone
        emailOriginal = email

        dispatch(edit({ id, nomeCompleto, telefone, email, status, imagem }))
      }
    }
  }

  return (
    <>
      <S.Card status={status}>
        <S.PhotoArea>
          <S.Photo src={imagem} />
        </S.PhotoArea>
        <S.Info>
          <S.Nome
            disabled={!editing}
            value={nomeCompleto}
            onChange={(event) => setNome(event.target.value)}
          />
          <S.PhoneArea>
            <S.PhoneImg src={require('../../assets/img/phone.png')} />
            <S.Phone
              type="tel"
              disabled={!editing}
              value={telefone}
              onChange={(event) => setTel(event.target.value)}
            />
          </S.PhoneArea>
          <S.MailArea>
            <S.MailImg src={require('../../assets/img/mail.png')} />
            <S.Mail
              type="email"
              disabled={!editing}
              value={email}
              onChange={(event) => setMail(event.target.value)}
            />
          </S.MailArea>
        </S.Info>
        <S.buttons>
          {editing ? (
            <>
              <img
                src={require('../../assets/img/save.png')}
                onClick={saveEdition}
              ></img>
              <img
                src={require('../../assets/img/cancel.png')}
                onClick={cancelEdition}
              ></img>
            </>
          ) : (
            <>
              <img
                src={require('../../assets/img/edit.png')}
                onClick={() => setEditing(true)}
              ></img>
              <img
                src={require('../../assets/img/delete.png')}
                onClick={() => dispatch(remove(id))}
              ></img>
            </>
          )}
          <S.importante>
            {status === 'normal' ? <></> : <span>Favorito</span>}
          </S.importante>
        </S.buttons>
      </S.Card>
    </>
  )
}

export default Contato
