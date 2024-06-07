import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { RootReducer } from '../../store'
import { changeTerm, changeFilter } from '../../store/reducers/filtro'
import AreaFiltro, { Button, Field } from './styles'

const Filtro = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filtro)
  const [condicaoFavorito, setCondicaoFavorito] = useState(false)

  const [criteria, setCriteria] = useState<any>()

  function alteraFavorito() {
    if (condicaoFavorito) {
      setCondicaoFavorito(!condicaoFavorito)
      setCriteria('normal')
      dispatch(changeFilter(criteria))
    } else {
      setCondicaoFavorito(!condicaoFavorito)
      setCriteria('favorito')
      dispatch(changeFilter(criteria))
    }

    setCondicaoFavorito(!condicaoFavorito)
  }

  return (
    <>
      <AreaFiltro>
        <div>
          <>
            <h3>Todos os Contatos</h3>
            <hr />
            <Field
              type="text"
              placeholder="Busque pelo nome, telefone..."
              value={term}
              onChange={(event) => dispatch(changeTerm(event.target.value))}
            />
            <Button onClick={(event) => alteraFavorito()}>Favorito</Button>
          </>
        </div>
      </AreaFiltro>
    </>
  )
}

export default Filtro
