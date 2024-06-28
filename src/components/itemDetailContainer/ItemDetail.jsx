import { Image } from "antd"

function ItemDetail({ item }) {

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "20px" }}>
      <h1>{item.title}</h1>

      <Image
        width={200}
        src={item.image}
        style={{ borderRadius: "10px" }}
      />

      <p>{item.description}</p>

      <div style={{ fontWeight: "bold", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ marginRight: "100px", fontSize: "50px" }}>
          ${item.price}
        </p>
        <p>
          Stock: {item.stock}
        </p>
      </div>

    </div>
  )
}

export default ItemDetail