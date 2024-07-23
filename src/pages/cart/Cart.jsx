import { Button } from "antd"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ProductCard } from "../../components/productCard/ProductCard"
import Swal from "sweetalert2"
const Cart = () => {

  const { cart, clearCart, deleteProduct, getTotalPrice } = useContext(CartContext)
  let total = getTotalPrice()

  const handleClearCart = () => {
    Swal.fire({
      title: "Está seguro que desea limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()

        Swal.fire("Carrito vaciado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se ha vaciado el carrito", "", "info");
      }
    });

  }

  return (
    <div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "20px", gap: "10px" }}>
        {
          cart.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  stock={product.stock}
                  category={product.category}
                  image={product.image}
                  id={product.id}
                  quantity={product.quantity}
                />
              </div>
            )
          })
        }

      </div>

      {
        cart.length === 0 &&
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          <Link to="/"><Button type="primary" style={{margin: "20px", backgroundColor: "black" }}>Empezar a comprar</Button></Link>
        </div>
      }

      {
        cart.length > 0 &&
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          <Button type="primary" danger onClick={() => handleClearCart()}>Limpiar carrito</Button>
          <Link to="/checkout">
            <Button type="primary" style={{margin: "20px", backgroundColor: "green" }}>Finalizar compra</Button>
          </Link>
          <h2>TOTAL: ${total}</h2>

        </div>
      }

    </div>
  )
}

export default Cart