import ItemList from "./ItemList"
import { products } from "../../products"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spin, Alert } from 'antd';
import { db } from "../../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState({})
    const { category } = useParams()

    useEffect(() => {
        let productsCollection = collection(db, "products")
        let consulta = productsCollection

        if(category){
            consulta = query(productsCollection, where("category", "==", category))
        }
        
        getDocs(consulta).then(res => {
            let products = res.docs.map(product => ({ ...product.data(), id: product.id }))
            setItems(products)
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