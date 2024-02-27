import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Header from './Components/Header';
import Logout from './Components/Logout';
import Additems from './Components/Additems';

function App() {
  return (
    <>

<BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
          <Route path='/register'  element={<Signup/>}></Route>
          <Route path='/home'  element={<Home/>}></Route>
          <Route path='/header'  element={<Header/>}></Route>
          <Route path='/logout'  element={<Logout/>}></Route>
          <Route path='/additem'  element={<Additems/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
