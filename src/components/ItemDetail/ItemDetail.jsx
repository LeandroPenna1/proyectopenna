import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../Context/CartContext"
import "./ItemDetail.css"

const ItemDetail = ({id, name, img, category, stock, description, price}) => {
  const {addItem, isInCart} = useCart()
  const handleAdd = (count) => {
    const productObjet = {
      id, name, price, quantity: count
    }
    addItem(productObjet)
  }
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width: 400}}/>
        <p>Category: {category}</p>
        <p>Stock: {stock}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <div>
        {
          isInCart(id) ? (
            <Link to='/cart'>Finalizar Compra</Link>
          ) : (
            <ItemCount stock={stock} onAdd={handleAdd}/>
          )
        
        
      }
      </div>
    </article>
  )
}

export default ItemDetail