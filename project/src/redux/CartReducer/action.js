import { ADD_TO_CART } from "./actiontype";
import axios from "axios";

export const AddtoCart = (payload) => {
    return {type:ADD_TO_CART, payload}
} 
export const getCart = (id) =>(dispatch) => {
    axios
    .get("")
    .then((res)=>{
        dispatch(AddtoCart(res.data))    
    })
    .catch((err)=>console.log(err))
}