import {combineReducers} from "redux";
import navbarReducer from './navbar.reducer'
import orderReducer from "./order.reducer";
import catalogReducer from "./catalog.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({navbar: navbarReducer, order: orderReducer, catalog: catalogReducer, product: productReducer})

export default rootReducer;
