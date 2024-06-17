import CartWidget from "../cartWidget/CartWidget"
import "./navbar.css"

export const NavBar = () => {

    return (
        <div className="navbarContainer">
            <div>
                <ul style={{  display: "flex", justifyContent: "space-between", gap: "50px", alignItems: "center", listStyleType: "none" }}>
                    <li><a href="#" style={{ textDecoration: "none" }}>Decoración</a></li>
                    <li><a href="#" style={{ textDecoration: "none" }}>Lámparas</a></li>
                    <li><a href="#" style={{ textDecoration: "none" }}>Personalizado</a></li>
                </ul>
            </div>

            <img src="https://res.cloudinary.com/dzfby9wvn/image/upload/v1718665101/Logo_3dTowers-01-01_vscywi.png" alt=""
                style={{
                    width: "150px",
                    height: "100px",
                }} />
            <CartWidget />
        </div>
    )
}
