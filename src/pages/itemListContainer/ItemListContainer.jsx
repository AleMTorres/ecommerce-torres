import ItemList from "./ItemList"
import { products } from "../../products"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState({})
    const { category } = useParams()

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            if (products) {
                resolve(category ? products.filter(product => product.category === category) : products)
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
    }, [category])


    return (
        <>
            <ItemList products={items} />
        </>
    )
}

export default ItemListContainer