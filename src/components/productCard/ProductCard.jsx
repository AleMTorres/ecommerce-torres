import { Link } from "react-router-dom"
import { Card } from 'antd';
const { Meta } = Card;

export const ProductCard = ({ title, description, price, stock, category, image, id, quantity }) => {

    return (

        <>
            <Card
                hoverable
                style={{
                    width: 300,
                    marginTop: 16
                }}
                cover={
                    <img
                        alt="example"
                        src={image}
                    />
                }
            >

                <Meta
                    title={title}
                    description={description}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p>Precio: ${price}</p>
                    <p>Stock: {stock}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "green", fontWeight: "bold" }}>
                    <p>En carrito: {quantity}</p>
                </div>

                <Link to={`/detalle/${id}`} style={{ textDecoration: "none" }}>
                    <h4>Ver más</h4>
                </Link>
            </Card>
        </>
    )
}