import * as enums from '../utils/enums/Contatos'

class Contato {
  id: number
  nomeCompleto: string
  telefone: string
  email: string
  status: enums.Status
  imagem: string

  constructor(
    id: number,
    nomeCompleto: string,
    telefone: string,
    email: string,
    status: enums.Status,
    imagem: string
  ) {
    this.id = id
    this.nomeCompleto = nomeCompleto
    this.telefone = telefone
    this.email = email
    this.status = status
    this.imagem = imagem
  }
}

export default Contato
