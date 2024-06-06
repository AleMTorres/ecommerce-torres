export const ProductCard = ({ title, description, price }) => {

    return (
        <div>
            <h5>Título: {title}</h5>
            <h3>Descripción: {description}</h3>
            <p>Precio: ${price}</p>
        </div>
    )
}