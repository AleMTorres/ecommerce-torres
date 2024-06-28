import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../products"

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    let product = products.find((product) => product.id === +id)
    if (product) {
      setItem(product)
    }
  }, [id])

  return <ItemDetail item={item} /> 
}

export default ItemDetailContainer