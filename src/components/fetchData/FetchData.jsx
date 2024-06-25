import { useEffect, useState } from "react"

function FetchData() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div key={products.id}>
            {products.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default { FetchData, products }