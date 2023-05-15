import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

// const {isAuth} = useSelector((store)=>store.AuthReducer)



const token = localStorage.getItem("Login")

if(!token) {
  return <Navigate to={'/signup'}  />
}

 
  return ( children  )
}

export default PrivateRoutes