import { Outlet, Navigate } from "react-router-dom"


const PrivateRoutes = () => {
    let rol = 'user'

    return rol === 'admin' ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoutes