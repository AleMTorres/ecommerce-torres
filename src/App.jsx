import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './pages/itemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default App
