import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={"Lista de Productos"}/>}/>
        <Route path='/category/:category' element={<ItemListContainer />}/>
        <Route path='/detail/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
