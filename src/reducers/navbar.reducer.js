import {CLOSE_MOBILE_NAVBAR, OPEN_MOBILE_NAVBAR} from "../contants";


const initialState = {
    navbarExpand: false
}

export default function navbarReducer(state = initialState, action) {
    switch (action.type){
        case OPEN_MOBILE_NAVBAR:
            return {...state, navbarExpand: true};
        case CLOSE_MOBILE_NAVBAR:
            return {...state, navbarExpand: false};
        default:
            return state;
    }
}