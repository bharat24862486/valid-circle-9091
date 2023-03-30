import { PRODUCTDATAFAILURE, PRODUCTDATAREQ, PRODUCTDATASUCCESS } from "./actionTypes";


const initialState = {
    isLoading: false,
    isError:false,
    productsData:[]
}


export const reducer = (state=initialState , {type,payload}) => {

     switch (type) {
        case PRODUCTDATAREQ : {
            return {...state, isLoading:true, isError:false}
        }
        case PRODUCTDATASUCCESS : {
            return {...state, isLoading:false, isError:false, productsData: payload}
        }
        case PRODUCTDATAFAILURE : {
            return {...state, isLoading:false, isError:true}
        }
        default : 
        return state
     }
}