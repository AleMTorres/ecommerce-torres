import { Button } from "antd"
import { Link } from "react-router-dom"
const Cart = () => {
  return (
    <div>
      <Link to="/checkout">
        <Button type="primary">Checkout</Button>
      </Link>
    </div>
  )
}

export default Cart