export const ProductCard = ({ title, description, price, stock, category, image }) => {

    return (
        <div style={{ display: "flex", gap: "10px", border: "1px solid black", padding: "10px", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
            <h3>{title}</h3>
            <img src={image} alt="" width={200} height={250}/>
            <h5>Descripción: {description}</h5>
            <p>Precio: ${price}</p>
        </div>
    )
}