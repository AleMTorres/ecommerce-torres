import { useState } from "react";
import { Button } from "antd";

export const Counter = ({ onAdd, stock, initial = 1 }) => {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert("Stock insuficiente");
        }
    }

    const decrement = () => {
        setCount(count - 1);
        if (count === 0) {
            setCount(0);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "20px", gap: "10px" }}>
            <Button onClick={increment} style={{backgroundColor: "black", color: "white"}}>+</Button>
            <p>{count}</p>
            <Button onClick={decrement} style={{backgroundColor: "black", color: "white"}}>-</Button>
            <Button onClick={() => onAdd(count)} style={{backgroundColor: "black", color: "white"}} ghost>Agregar al carrito</Button>
        </div>
    )
}
