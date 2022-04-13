
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Headers/Header';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import Order from './Components/Orders/Order';
import RequireAuth from './Components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/order" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
