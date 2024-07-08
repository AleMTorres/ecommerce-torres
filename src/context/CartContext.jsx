import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        let exist = isInCart(product.id)

        if (exist) {
            let items = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + product.quantity }
                } else {
                    return item
                }
            })

            setCart(items)
        } else {
            setCart([...cart, product])
        }
    }
    const clearCart = () => {
        setCart([])
    }

    const deleteProduct = (id) => {
        let items = cart.filter((item) => item.id !== id)
        setCart(items)
    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    }

    let data = { cart, addToCart, clearCart, deleteProduct }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider