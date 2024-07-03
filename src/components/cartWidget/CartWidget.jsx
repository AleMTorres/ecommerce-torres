import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Badge, Avatar, Button } from "antd";

const CartWidget = () => {
    return (
        <div style={{ marginRight: "50px" }}>
            <Link to="/cart">
                <Badge count={0} showZero>
                    <TiShoppingCart color="" size={30}/>
                </Badge>
            </Link>
        </div >
    )
}

export default CartWidget