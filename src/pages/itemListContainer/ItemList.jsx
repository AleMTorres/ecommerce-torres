import { ProductCard } from "../../components/productCard/ProductCard"

const ItemList = ({ products }) => {

    return (
        <div style={{ display: "flex", gap: "20px" }}>

            {
                products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            stock={product.stock}
                            category={product.category}
                            image={product.image}
                            id={product.id}
                        />
                    )
                })
            }

            {/* {products.length > 0 ?
                <>
                    <ProductCard
                        title={products[0].title}
                        description={products[0].description}
                        price={products[0].price}
                        stock={products[0].stock}
                        category={products[0].category}
                        image={products[0].image} />
                </>
                : null
            } */}
        </div>

    )
}

export default ItemList