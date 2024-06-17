import CartWidget from "../cartWidget/CartWidget"
import "./navbar.css"

export const NavBar = () => {

    return (
        <div className="navbarContainer">
            <div>
                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", gap: "50px" }}>
                    <li>Decoración</li>
                    <li>Lámparas</li>
                    <li>Personalizado</li>
                </ul>
            </div>

            <img src="https://res.cloudinary.com/dzfby9wvn/image/upload/v1718149907/samples/logo.png" alt=""
                style={{
                    width: "150px",
                    height: "100px",
                }} />
            <CartWidget />
        </div>
    )
}
