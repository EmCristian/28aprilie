import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavBar/NavigationBar';
import Register from './Components/Register/Register';
import ProductCard from './Components/ProductCard/ProductCard';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
      {/* <header className='App-header'> */}
      {/* <Login /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
