import { Link } from "react-router-dom"
import { Card, Button } from 'antd';
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { db } from "../../firebaseConfig";
import { collection, doc, deleteDoc } from "firebase/firestore";
const { Meta } = Card;

export const ProductCard = ({ title, description, price, stock, category, image, id, quantity }) => {
    const { cart, deleteProduct } = useContext(CartContext)

    return (

        <>
            <Link to={`/detalle/${id}`} style={{ textDecoration: "none" }}>

                <Card
                    hoverable
                    style={{
                        width: 300,
                        marginTop: 16,
                    }}
                    cover={
                        <img
                            alt="product image"
                            src={image}
                        />
                    }
                >

                    <Meta
                        title={title}
                        description={description}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", fontWeight: "bold" }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>Precio: ${price}</p>
                        <p>Stock: {stock}</p>
                    </div>

                    {cart.map((product) => {

                        if (product.id === id) {
                            return (
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "green", fontWeight: "bold" }}>
                                    <p>En carrito: {product.quantity}</p>
                                    <Button type="primary" danger onClick={() => deleteProduct(product.id)}>Eliminar producto</Button>
                                </div>
                            )
                        }
                    })}

                </Card>
            </Link>

        </>
    )
}