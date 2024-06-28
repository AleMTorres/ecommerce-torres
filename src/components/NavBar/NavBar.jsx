import CartWidget from "../cartWidget/CartWidget"
import "./navbar.css"
import { Outlet, Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <div className="navbarContainer">

                <div>
                    <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", gap: "50px", }} className="categories">
                        <Link to="category/lamparas" style={{ textDecoration: "none" }}>Lámparas</Link>
                        <Link to="category/jarrones" style={{ textDecoration: "none" }}>Jarrones</Link>
                        <Link to="/" style={{ textDecoration: "none" }}>Todo</Link>
                    </ul>
                </div>

                <Link to="/">
                    <img src="https://res.cloudinary.com/dzfby9wvn/image/upload/v1719534990/logo_rdaqep.png" alt=""
                        style={{
                            width: "150px",
                            height: "110px",
                        }} />
                </Link>

                <CartWidget />

            </div>
            <Outlet />

        </>
    )
}

export default NavBar