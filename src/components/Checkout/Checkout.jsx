import { useState } from "react"
import { useCart } from "../Context/CartContext"
import { collection, documentId, getDocs, where, writeBatch, query, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import "./Checkout.css";
const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderCreated, setOrder] = useState(false)
  const {cart, totalQuantity, getTotal} = useCart()
  const total = getTotal()
  const createOrder = async () => {
    setLoading(true)
    try {
      const objOrder = {
        buyer: {
          firstName: "Leandro", //cambiar esto: sacar del formulario
          lastName: "Penna",
          phone: "1231231",
          addres: "Acaaca"
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date()
      }
      const ids = cart.map((item) => item.id)
      const productRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), 'in', ids )))
        const {docs} = productsAddedFromFirestore;
        const outOfStock = [];
        const batch = writeBatch(db)
        docs.forEach((doc)=> {
          const dataDoc = doc.data()
          const stockDB = dataDoc.stock
          const productAddedToCart = cart.find((prod) => prod.id === doc.id)
          const productQuantity = productAddedToCart?.quantity
        
          if(stockDB >= productQuantity) {
            batch.update(doc.ref, {stock: stockDB - productQuantity})
          }else {
            outOfStock.push({id:doc.id, ...dataDoc})
          }
        })
        if(outOfStock.length === 0) {
          await batch.commit()
          const orderRef = collection(db, "orders")
          const orderAdded = await addDoc(orderRef, objOrder)
          console.log("EL id de tu order es ${orderAdded.id} ")
          setOrderCreated(true)
        }else {
          console.log()
        }
      }catch(error) {
      console.log("")
    }
  }
  return (
    <div className="checkout-container">
    <button
      onClick={createOrder}
      className="checkout-button"
      disabled={loading}
    >
      {loading ? "Generando Orden..." : "Generar Orden"}
    </button>
    {orderCreated && (
      <div className="order-message">¡Tu orden ha sido creada con éxito!</div>
    )}
  </div>
  )
}

export default Checkout