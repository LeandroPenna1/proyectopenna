import Producto from './Producto'
import Mercurial from '../assets/mercurial.jpg'
import Predator from '../assets/predator.jpg'
import Camiseta from '../assets/shirt.webp'

function Productos() {
    return(
        <div className='products'>
            <div className='product-grid'>
                <Producto imagen={Mercurial} nombre='Botines Mercurial' precio='$200' />
            </div>
            <div className='product-grid'>
            <Producto imagen={Predator} nombre='Botines Predator' precio='$180' />
            </div>
            <div className='product-grid'>
            <Producto imagen={Camiseta} nombre='Camisetas Vintage' precio='$100' />
            </div>
        </div>
    )
}

export default Productos;