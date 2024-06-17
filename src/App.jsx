import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './pages/itemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greetings={"Hola mundo"}/>
    </>
  )
}

export default App
