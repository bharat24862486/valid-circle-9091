import { ADD_TO_CART, GET_ADDRESS } from "./actiontype";

const inintialState = {
    bag : [],
    address : "",
}

export const reducer = (state=inintialState,{type, payload}) => {
    switch(type){
        case ADD_TO_CART :
            return {...state, bag : payload}
        case GET_ADDRESS :
            return {...state, address :payload}
        default :
            return state;
    }
}
