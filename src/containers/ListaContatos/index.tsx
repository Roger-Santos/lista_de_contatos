import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../Components/Contato'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { term, criteria } = useSelector((state: RootReducer) => state.filtro)

  const filterContatos = () => {
    let filtroContatos = itens

    console.log(criteria)

    if (criteria === 'normal') {
      if (term !== undefined) {
        filtroContatos = filtroContatos.filter(
          (item) =>
            item.nomeCompleto.toLowerCase().search(term.toLowerCase()) >= 0
        )
        return filtroContatos
      } else {
        return itens
      }
    } else {
      filtroContatos = filtroContatos.filter(
        (item) => item.status.toLowerCase().search('favorito') >= 0
      )

      if (term !== undefined) {
        filtroContatos = filtroContatos.filter(
          (item) =>
            item.nomeCompleto.toLowerCase().search(term.toLowerCase()) >= 0
        )
        return filtroContatos
      } else {
        return filtroContatos
      }
    }
  }

  const contatos = filterContatos()

  return (
    <>
      <ul>
        {contatos.map((i) => (
          <li key={i.nomeCompleto}>
            <Contato
              id={i.id}
              nomeCompleto={i.nomeCompleto}
              telefone={i.telefone}
              email={i.email}
              status={i.status}
              imagem={i.imagem}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaContatos
