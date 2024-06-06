import { ProductCard } from "../../components/productCard/ProductCard"

export const Home = () => {

    const productos = [
        {
          title: "Camiseta",
          description: "Camiseta de algodón 100% con diseño estampado.",
          price: 19.99
        },
        {
          title: "Pantalones",
          description: "Pantalones de mezclilla de corte ajustado.",
          price: 49.99
        },
        {
          title: "Zapatos",
          description: "Zapatos deportivos cómodos para correr.",
          price: 89.99
        }
      ];
            

    return (
        <div>
            <ProductCard title={productos[0].title} description={productos[0].description} price={productos[0].price} />
            <ProductCard title={productos[1].title} description={productos[1].description} price={productos[1].price} />
            <ProductCard title={productos[2].title} description={productos[2].description} price={productos[2].price} />

        </div>
    )
}