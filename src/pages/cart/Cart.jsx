import { Button } from "antd"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductCard } from "../../components/productCard/ProductCard"
const Cart = () => {

  const { cart, clearCart, deleteProduct } = useContext(CartContext)

  return (
    <div>

      <div>
        {
          cart.map((product) => {
            return (
              <>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  stock={product.stock}
                  category={product.category}
                  image={product.image}
                  id={product.id}
                />

                {/* <Button type="primary" onClick={deleteProduct(product.id)}>Eliminar</Button> */}
              </>
            )
          })
        }

      </div>

      <Button type="primary" onClick={clearCart}>Limpiar carrito</Button>
      <Link to="/checkout">
        <Button type="primary" style={{ marginTop: "20px", marginLeft: "20px" }}>Checkout</Button>
      </Link>
    </div>
  )
}

export default Cart