import Cabecalho from '../../containers/Cabecalho'
import Filtro from '../../containers/Filtro'
import NovoContato from '../../containers/NovoContato'
import { Container } from '../../styles'

const NewTask = () => {
  return (
    <>
      <Container>
        <Cabecalho />
        <NovoContato />
      </Container>
    </>
  )
}

export default NewTask
