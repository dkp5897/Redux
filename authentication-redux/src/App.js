import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Product from './Pages/Produc';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
