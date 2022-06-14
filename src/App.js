import React from "react";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="home" element={<Home />}/>
      </Route>
    </Routes>
  </BrowserRouter>
    // <div>
    //   <Home/>
    // </div>
  );
}

export default App;
