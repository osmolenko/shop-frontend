import {combineReducers} from "redux";
import navbarReducer from './navbar.reducer'
import orderReducer from "./order.reducer";

const rootReducer = combineReducers({navbar: navbarReducer, order: orderReducer})

export default rootReducer;
