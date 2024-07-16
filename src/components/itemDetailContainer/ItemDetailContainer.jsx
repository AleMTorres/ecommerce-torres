import { useEffect, useState, useContext } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../products"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"

function ItemDetailContainer() {

  const { cart, addToCart, getQuantityById } = useContext(CartContext)

  const { id } = useParams()
  const [item, setItem] = useState({})

  let initial = getQuantityById(+id)

  useEffect(() => {
    let product = products.find((product) => product.id === +id)
    if (product) {
      setItem(product)
    }
  }, [id])

  const onAdd = (quantity) => {
    let objetoFinal = {...item, quantity: quantity}
    addToCart(objetoFinal)
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: true,
      timer: 2000
    })
  }

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />
}

export default ItemDetailContainer