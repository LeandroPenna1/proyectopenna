import { useState } from 'react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListenContainer';
import Productos from './components/Productos';
import './index.css';
function App() {

  return (
    <>
    <div>
      <NavBar/>
      <div className='bienvenida'>
      <ItemListContainer greeting={"Bienvenidos a nuestro Sitio!"}/>
      </div>
      <div className="card">
      <Productos/>
      </div>
      </div>
    </>
  )
}

export default App
