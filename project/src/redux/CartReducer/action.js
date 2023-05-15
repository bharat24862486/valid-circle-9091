import { baseUrl } from "../../Url";
import { ADD_TO_CART, GET_ADDRESS, GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST, POST_ADDRESS } from "./actiontype";
import axios from "axios";

// const baseUrl = `https://shy-teal-caterpillar-toga.cyclic.app`
// const baseUrl = `https://glorious-robe-calf.cyclic.app`


// export const AddtoCart = (payload) => {
//     return {type:ADD_TO_CART, payload}
// } 

// export const getCart =(dispatch) => {
//     axios
//     .get("https://shy-teal-caterpillar-toga.cyclic.app/cart")
//     .then((res)=>{
//         dispatch(AddtoCart(res.data))    
//     })
//     .catch((err)=>console.log(err))
// }

// export const Delete=(id)=>(dispatch) =>{

//     return  axios.delete(`https://shy-teal-caterpillar-toga.cyclic.app/cart/${id}`) 
//     // getCart()
// }

// export const getAddress = (obj) => (dispatch) => {
//     axios
//     .get("",obj)
//     .then((res)=>{
//         return (
//             dispatch({type:GET_ADDRESS, payload : res.data})
//         )
//     .catch((err)=>
//         console.log(err)
//     )
//     })
// }

// export const postAddress = (obj) => (dispatch) => {
//     axios
//     .post("",obj)
//     .then((res)=>{
//         return (
//             dispatch({type:POST_ADDRESS, payload:res.data})
//         )
//     })
//     .catch((err)=>console.log(err))
// }






export const getCartProducts = (dispatch) => {
    
    dispatch({ type: GET_DATA_REQUEST });
  
    return axios
      .get(`${baseUrl}/cart`)
       
      .then((res) => {
        dispatch({ type: GET_DATA, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };
  
  export const updateCartProductQty = (id, qty) => (dispatch) => {
    console.log({qty, id});
        dispatch({ type: GET_DATA_REQUEST });
    
try {
  axios.patch(
   `${baseUrl}/cart/${id}`,
   { quantity: +qty },
  );
  
} catch (error) {
  
}
 
  };
  
  export const deleteCartProduct = (id) => (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });
   try {
     axios.delete(`${baseUrl}/cart/${id}`);
   } catch (error) {
    
   }
  };
  
   
  export const deleteAll = (dispatch) => {
      dispatch({ type: GET_DATA_REQUEST });
      
      axios
        .delete(`${baseUrl}/cart`)
          .then((res) => {
          dispatch({ type: GET_DATA,payload:[]});
        })
        .catch((err) => {
          dispatch({ type: GET_DATA_ERROR });
        });
    };
    