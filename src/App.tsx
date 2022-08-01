import React, { useState } from 'react';
import './App.css';
import { Main } from './pages/Main';
import {Checkout} from './pages/Checkout';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import { Items } from './components/ItemsDetails';
import {Cart} from './components/modal';
import {Orderplaced} from './pages/Orderplaced';
import { Kpending } from './pages/Kpending';
// import {types} from './types';

function App(): JSX.Element {

  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Modal" element={<Cart/>} />
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Orderplaced' element={<Orderplaced/>}/>
        <Route path='/Kpending' element={<Kpending/>}/>



      </Routes>
    </div>
  );
}

export default App;
