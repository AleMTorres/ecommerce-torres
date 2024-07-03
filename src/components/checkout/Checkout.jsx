import { Form, Button, Input } from "antd"
import { useState } from "react";
const Checkout = () => {

    const [form] = Form.useForm()
    const [data, setData] = useState({nombre:"", phone:"", email:""})

    const onFinish = (values) => {
        setData(...data, values)
        console.log(data);
    };


    return (
        <div>
            <h1>Checkout</h1>
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

                <Button type="primary" htmlType="submit">
                    Enviar
                </Button>
            </Form>
            {/* <form onSubmit={checkoutOrder}>
                <input type="text" placeholder="Ingresa tu nombre" />
                <button type="submit">Enviar</button>
            </form> */}
        </div>
    )
}

export default Checkout