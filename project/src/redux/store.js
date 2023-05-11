import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/Reducer";
 


const rootReducer = combineReducers({ProductReducer,CartReducer,AuthReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));