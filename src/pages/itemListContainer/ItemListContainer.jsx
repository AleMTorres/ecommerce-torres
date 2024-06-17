import ItemList from "./ItemList"
import { products } from "../../products"
import { useState, useEffect } from "react"
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState({})

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            if (products) {
                resolve(products)
            } else {
                reject({ message: "error al obtener productos", codigo: "404" })
            }
        })

        getProducts
            .then(res => {
                setItems(res)
            })
            .catch(error => {
                setError(error)
            })
    }, [])


    return (
        <>
            <ItemList products={items} />
        </>
    )
}

export default ItemListContainer