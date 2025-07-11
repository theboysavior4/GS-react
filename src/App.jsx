import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <ItemCount stock={5}/>
    <Routes>
      <Route path='/' element={ <ItemListContainer saludo='Bienvenidos a mi app'/>}/>
      <Route path='/category/:categoryId' element={ <ItemListContainer saludo='Estas en la categoria:'/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  )  
   
}

export default App
