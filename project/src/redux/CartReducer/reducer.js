import { ADD_TO_CART } from "./actiontype";

const inintialState = {
    bag : []
}

export const reducer = (state=inintialState,{type, payload}) => {
    switch(type){
        case ADD_TO_CART :
            return {...state, bag : [...state.bag,payload]}
        default :
            return state;
    }
}