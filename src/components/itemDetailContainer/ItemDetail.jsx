import { Image, Spin, Button } from "antd"
import { Counter } from "../counter/Counter"
import { CartContext } from "../../context/CartContext"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ItemDetail({ item, onAdd, initial }) {

  const [spinning, setSpinning] = useState(false);
  const [percent, setPercent] = useState(0);
  const { cart } = useContext(CartContext)

  const showLoader = () => {
    setSpinning(true);
    let ptg = -10;
    const interval = setInterval(() => {
      ptg += 5;
      setPercent(ptg);
      if (ptg > 120) {
        clearInterval(interval);
        setSpinning(false);
        setPercent(0);
      }
    }, 50);
  };

  useEffect(() => {
    showLoader()
  }, [])

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "20px" }}>
      <Spin spinning={spinning} percent={percent} fullscreen tip="Cargando producto..." />

      <h1>{item?.title}</h1>

      <Image
        width={200}
        src={item?.image}
        style={{ borderRadius: "10px" }}
      />

      <p>{item?.description}</p>

      <span>Categoría: <Link to={`/category/${item?.category}`}><Button type="text">{item?.category}</Button></Link></span>

      {cart.map((product) => {
        if (product?.id === item?.id) {
          return (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "green", fontWeight: "bold" }}>
              <p>En carrito: {product?.quantity}</p>
            </div>
          )
        }
      })}

      <div style={{ fontWeight: "bold", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ marginRight: "100px", fontSize: "50px" }}>
          ${item?.price}
        </p>
        <p>
          Stock: {item?.stock}
        </p>
      </div>
      <Counter onAdd={onAdd} stock={item?.stock} initial={initial} />
    </div>
  )
}

export default ItemDetail