import carrito from '../../assets/carrito.png'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

function CartWidget() {
    const {totalQuantity} = useContext(CartContext)
    return (
        <Link className='nav-link' to='/cart'>
        <div style={{ color: 'white'}}>
             <img src={carrito} alt="Carrito" style={{ width: '34px', height: '24px'}}/>{totalQuantity}
        </div>
        </Link>
    )
}

export default CartWidget;