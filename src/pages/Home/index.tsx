import AddButton from '../../Components/AddButton'
import Cabecalho from '../../containers/Cabecalho'
import Filtro from '../../containers/Filtro'
import ListaContatos from '../../containers/ListaContatos'
import { Container } from '../../styles'

const Home = () => {
  return (
    <>
      <Container>
        <Cabecalho />
        <Filtro />
        <ListaContatos />
        <AddButton />
      </Container>
    </>
  )
}
export default Home
