import { baseUrl } from "../../Url";
import { ADD_TO_CART, GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actiontype";
import axios from "axios";

 

export const AddtoCart = (payload) => {
    return {type:ADD_TO_CART, payload}
} 


export const getCart =(dispatch) => {
    axios
    .get("https://glorious-robe-calf.cyclic.app/cart")
    .then((res)=>{
        dispatch(AddtoCart(res.data))    
    })
    .catch((err)=>console.log(err))
}




    // return  axios.delete(`https://glorious-robe-calf.cyclic.app/cart/${id}`) 
    // getCart()
// }


// export const getCart =(dispatch) => {
//     axios
//     .get(`${baseUrl}/cart`)
//     .then((res)=>{
//         dispatch(AddtoCart(res.data))    
//     })
//     .catch((err)=>console.log(err))
// }

// export const Delete=(id)=>(dispatch) =>{

//     return  axios.delete(`${baseUrl}/cart/${id}`) 
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


// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJvbyIsImxhc3ROYW1lIjoicHAiLCJ1c2VySUQiOiI2NDVlMmNkY2YxMGM3NTUxZDdhNDdiYjIiLCJpYXQiOjE2ODM4OTM0ODJ9.lYmPR9dz-OjPUPhD4CVW_SPZSoDItoE9yEyBTs7lA1c`;

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
   
  dispatch({ type: GET_DATA_REQUEST });

  // axios.get(`${baseUrl}/cart`)
 
  return axios.patch(
    `${baseUrl}/cart/${id}`,
    { quantity: +qty }
  );
};

export const deleteCartProduct = (id) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });

  // axios.get(`${baseUrl}/cart`)
  axios.delete(`${baseUrl}/cart/${id}`);
};



export const deleteAll = (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });

    axios
      .delete(`${baseUrl}/cart`)
      // axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/cart/dummy`)
      .then((res) => {
        dispatch({ type: GET_DATA,payload:[]});
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };
  