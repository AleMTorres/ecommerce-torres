import ItemList from "./ItemList"
import { products } from "../../products"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spin, Alert, Button, Flex } from 'antd';
import { db } from "../../firebaseConfig"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState({})
    const [spinning, setSpinning] = useState(false);
    const [percent, setPercent] = useState(0);
    const { category } = useParams()

    useEffect(() => {
        let productsCollection = collection(db, "products")
        let consulta = productsCollection

        if (category) {
            consulta = query(productsCollection, where("category", "==", category))
        }

        getDocs(consulta).then(res => {
            let products = res.docs.map(product => ({ ...product.data(), id: product.id }))
            setItems(products)
        })

        showLoader()
    }, [category])

    const showLoader = () => {
        setSpinning(true);
        let ptg = -10;
        const interval = setInterval(() => {
            ptg += 5;
            setPercent(ptg);
            if (ptg > 120) {
                clearInterval(interval);
                setSpinning(false);
                setPercent(0);
            }
        }, 100);
    };


    return (
        <>
            {items.length === 0 ? <Spin spinning={spinning} percent={percent} fullscreen/>
                : <ItemList products={items} />}
            {/* <Button type="primary" onClick={addProducts}>Agregar productos a la DB</Button> */}
        </>
    )
}

export default ItemListContainer