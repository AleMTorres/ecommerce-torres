import { Form, Button, Input, Spin } from "antd"
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebaseConfig"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


const Checkout = () => {

    const [form] = Form.useForm()
    const [data, setData] = useState({ nombre: "", phone: "", email: "" })
    const { cart, getTotalPrice, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState("")
    const [spinning, setSpinning] = useState(false);
    const [percent, setPercent] = useState(0);
    let total = getTotalPrice()
    const navigate = useNavigate()

    const showLoader = () => {
        setSpinning(true);
        let ptg = -10;
        const interval = setInterval(() => {
            ptg += 5;
            setPercent(ptg);
            if (ptg > 120) {
                clearInterval(interval);
                setSpinning(false);
                setPercent(0);
            }
        }, 100);
    };

    const onFinish = (values) => {
        showLoader()

        let order = {
            buyer: values,
            items: cart,
            total: total,
        }

        let orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            form.resetFields()
            setData({ nombre: "", phone: "", email: "" })

            setOrderId(id)

            Swal.fire({
                title: "Orden creada!",
                text: "Tu orden se creó con el id: " + id,
                icon: "success"

            })

            let productsCollection = collection(db, "products")

            cart.forEach((product) => {
                let refDoc = doc(productsCollection, product.id)
                updateDoc(refDoc, { stock: product.stock - product.quantity })
            })

            setTimeout(() => {
                clearCart()
                navigate("/")
            }, 2000)
        })


    };


    return (
        <div>
            <Spin spinning={spinning} percent={percent} fullscreen />

            <h1>Finalizar compra</h1>
            <Form form={form} name="register" onFinish={onFinish} >
                <Form.Item
                    name="name"
                    // label="Nombre"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tu nombre',
                        },
                    ]}
                    hasFeedback
                    style={{ width: '30%' }}
                >
                    <Input placeholder="Ingresa tu nombre" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    // label="Nombre"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tu teléfono',
                        },
                    ]}
                    hasFeedback
                    style={{ width: '30%' }}
                >
                    <Input placeholder="Ingresa tu teléfono" />
                </Form.Item>

                <Form.Item
                    name="email"
                    // label="Nombre"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tu email',
                        },
                    ]}
                    hasFeedback
                    style={{ width: '30%' }}
                >
                    <Input placeholder="Ingresa tu email" />
                </Form.Item>

                <Button type="primary" style={{ backgroundColor: "green" }} htmlType="submit">
                    Comprar
                </Button>
            </Form>
        </div>
    )
}

export default Checkout