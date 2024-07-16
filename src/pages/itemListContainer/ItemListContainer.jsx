import ItemList from "./ItemList"
import { products } from "../../products"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spin, Alert } from 'antd';

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState({})
    const { category } = useParams()

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            if (products) {
                setTimeout(() => {
                    resolve(category ? products.filter(product => product.category === category) : products)
                }, 1000)

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
            {items.length === 0 ? <Spin tip="Loading...">
                <Alert
                    message="Cargando productos"
                    description="Estamos diseñando los productos para usted"
                />
            </Spin> : <ItemList products={items} />}
        </>
    )
}

export default ItemListContainer