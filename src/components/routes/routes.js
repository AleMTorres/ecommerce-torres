import Cart from "../../pages/cart/Cart";
import ItemListContainer from "../../pages/itemListContainer/ItemListContainer";
import Checkout from "../checkout/Checkout";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";

export const routes = [
    {
        id: 1,
        path: '/',
        Element: ItemListContainer,
    },
    {
        id: 2,
        path: '/category/:category',
        Element: ItemListContainer,
    },
    {
        id: 3,
        path: '/cart',
        Element: Cart,
    },
    {
        id: 4,
        path: '/detalle/:id',
        Element: ItemDetailContainer,
    },
    {
        id: 5,
        path: '/checkout',
        Element: Checkout,
    },
]
