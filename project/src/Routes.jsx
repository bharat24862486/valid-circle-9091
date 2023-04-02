import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home/Home'
import KidsWear from './component/ProductPage/KidsWear'
import MensWear from './component/ProductPage/MensWear'
import WomensWear from './component/ProductPage/WomensWear'
import { Cartpage } from './pages/Cartpage'
import AdminPageLogin from './component/AdminDataBase/AdminPageLogin'
import AdminPanel from './component/AdminDataBase/AdminPanel'



const AllRoutes = () => {


  return (
     
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/kids' element={<KidsWear />} /> 
        <Route path='/mens' element={<MensWear />} /> 
        <Route path='/womens' element={<WomensWear />} /> 
        <Route path='/cart' element={<Cartpage />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/AdminLogin' element={<AdminPageLogin />} /> 
        <Route path='/AdminPanel' element={<AdminPanel />} /> 
        <Route path='*' element={<h2>Page not found...</h2>} /> 
    </Routes>
  )


}

export default AllRoutes