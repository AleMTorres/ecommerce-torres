import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './pages/itemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './pages/cart/Cart'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Checkout from './components/checkout/Checkout'


function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />

    </Routes>
  </BrowserRouter >
}

export default App
