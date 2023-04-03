import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import {reducer as CartReducer} from "./CartReducer/reducer";

// import { reducer as AdminReducer } from "./AdminReducer";
 


const rootReducer = combineReducers({ProductReducer,CartReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));