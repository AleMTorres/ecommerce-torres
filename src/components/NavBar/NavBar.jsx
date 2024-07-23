import CartWidget from "../cartWidget/CartWidget"
import "./navbar.css"
import { Outlet, Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <div className="navbarContainer">

                <div>
                    <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", gap: "50px", }} className="categories">
                        <Link className="navbar-link" to="category/lamparas" >Lámparas</Link>
                        <Link className="navbar-link" to="category/jarrones" >Jarrones</Link>
                        <Link className="navbar-link" to="/" >Todo</Link>
                    </ul>
                </div>

                <Link to="/">
                    {/* <img src="https://res.cloudinary.com/dzfby9wvn/image/upload/v1721690266/Logo_florencia_qngf4j.png" alt=""
                        style={{
                            width: "150px",
                            height: "150px",
                        }}
                    /> */}
                    <img src="https://res.cloudinary.com/dzfby9wvn/image/upload/v1721694307/cropped-deco-home-logo-icon_rs8olo.png" alt=""
                        style={{
                            width: "350px",
                            height: "150px",
                        }}
                    />
                </Link>

                <CartWidget />

            </div>
            <Outlet />

        </>
    )
}

export default NavBar