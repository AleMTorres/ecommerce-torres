import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <div style={{ marginRight: "50px" }}>
            <Link to="/cart">
                <Badge count={cart.length} showZero>
                    <TiShoppingCart color="" size={30} />
                </Badge>
            </Link>
        </div >
    )
}

export default CartWidget