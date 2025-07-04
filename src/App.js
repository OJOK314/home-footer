import React, { useState } from "react";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div> 
   <nav className="nav">
    <ul className="ul">
      <a className="a" href="mailto:kweyambapeter@gmail.com">Email</a>
      <br/>
      <a className="a" href="https://wa.me/0777520905?text:I%20am%20alfred">WhatsApp</a>
      <br/>
      <a className="a" href="https://www.linkedin.com/in/ojok-alfred/">LinkedIn</a>
      <br/>
      <a className="a" href="https://www.facebook.com/" >Facebook</a>
      <br/>
      <a className="a" href="https://twitter.com/">Twitter</a>
      <br/>
      <a className="a" href="tel:0781648144">Phone call</a>
      <br/>
      <a className="a" href="sms:0777501149">Text messages</a>
      <br/>
    </ul>
   </nav>
    <Footer
    
    /> 
    </div>
  );
}

export default App;
