import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './pages/itemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './pages/cart/Cart'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Checkout from './components/checkout/Checkout'
import CartContextProvider from './context/CartContext'
import Dashboard from './pages/dashboard/Dashboard'
import PrivateRoutes from './components/routes/PrivateRoutes'
import { routes } from './components/routes/routes'


function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavBar />}>
            {
              routes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))
            }
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter >
  )
}

export default App
