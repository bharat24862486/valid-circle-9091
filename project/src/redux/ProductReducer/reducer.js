import { PRODUCTDATAFAILURE, PRODUCTDATAREQ, PRODUCTDATASUCCESS } from "./actionTypes";

//d
const initialState = {
    isLoading: false,
    isError:false,
    productData:[]
}


export const reducer = (state=initialState , {type,payload}) => {

     switch (type) {
        case PRODUCTDATAREQ : {
            return {...state, isLoading:true, isError:false}
        }
        case PRODUCTDATASUCCESS : {
            return {...state, isLoading:false, isError:false, productData: payload}
        }
        case PRODUCTDATAFAILURE : {
            return {...state, isLoading:false, isError:true}
        }
        default : 
        return state
     }
}
