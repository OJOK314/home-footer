import React, { useEffect, useState } from "react";
import Button from './components/Button.js';
import './App.css';
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
import Action from "./Action.jsx";
import Axios from "./components/Axios.jsx";
// import React, {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return ( 
    <div className="div"> 
   <Button/> 
   <Axios/> 
    <Action/>
    <Footer/>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Button/>}/>
      <Route path="/Axios" element={<Axios/>}/>
      <Route path="/Action" element={<Action/>}/>
      <Route path="/Footer" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>  */}
    </div>
  );
}

export default App;
