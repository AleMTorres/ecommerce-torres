import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  let id = 2
  const [item, setItem] = useState({})
  
  useEffect(() => {
    products.find((product) => {
      if (product.id === id) {
        setItem(product)
      }
    })
  }, [id])

  return (
    <div>
        <ItemDetail item = {item}/>
    </div>
  )
}

export default ItemDetailContainer