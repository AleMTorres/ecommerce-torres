import { ProductCard } from "../../components/productCard/ProductCard";

const ItemList = ({ products }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {products.map((product) => {
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
                );
            })}
        </div>
    );
};

export default ItemList;
