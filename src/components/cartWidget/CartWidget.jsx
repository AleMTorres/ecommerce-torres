import { TiShoppingCart } from 'react-icons/ti';
import './cartWidget.css';

const CartWidget = () => {
    const cartItemCount = 5; // Número fijo de artículos en el carrito

    return (
        <div className="cart-widget">
            <TiShoppingCart className="cart-icon" size={30} />
            <span className="cart-count">{cartItemCount}</span>
        </div>
    );
};

export default CartWidget;
