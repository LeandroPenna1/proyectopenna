import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import './index.css';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar title="FutShop"/>
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={"Lista de Productos"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
