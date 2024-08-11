import { useCart } from "../Context/CartContext"
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const {cart, getTotal, totalQuantity} = useCart();
    const total = getTotal()
    if(totalQuantity === 0) {
        return <h3> No hay items</h3>
    }
return (
<div>
    {cart.map((item)=> {
        <CartItem key={item.id} {...item}/>
    
    })}
    <h4>Total: ${total} </h4>
    <div>
        <button>Limpiar Carrito</button>
        <Link to='/checkout' className="btn bt-primary">Checkout</Link>
    </div>
</div>
  )
}

export default Cart