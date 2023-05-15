import { ADD_TO_CART, GET_ADDRESS, GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actiontype";

const inintialState = {
    bag : [],
    address : "",
    isLoading:false,
    isError:false,
    // cartData :[]
}

export const reducer = (state=inintialState,{type, payload}) => {
    switch(type){
        case ADD_TO_CART :
            return {...state, bag : payload}
        case GET_ADDRESS :
            return {...state, address :payload}
            case GET_DATA_REQUEST:
                return {...state,isLoading:true}
            case GET_DATA:
                return {...state,isLoading:false,bag:payload}
            case GET_DATA_ERROR:
                return {...state,isLoading:false, isError:true};
            default:
                return state
        }
}
