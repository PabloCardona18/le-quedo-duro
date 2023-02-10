import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import {  } from "module";
import  NavHome  from './components/ui/NavHome/NavHome'
import './App.css'

function App() {

  return (   
   <>
   <NavHome/>
 
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/aboutUS' element={<aboutUS/>} />
    <Route path='/contactUS' element={<contactUS/>} />
    <Route path='/*' element={<NotFound/>} />
    
  </Routes> 


   </>
   
  )
}

export default App
