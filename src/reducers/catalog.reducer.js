import {CATALOG_OPEN_CAT, CATALOG_OPEN_MAIN_CAT} from "../contants";


const initialState = {
    mainCat: '',
    cat: ''
}

export default function catalogReducer(state = initialState, action) {
    switch (action.type) {
        case CATALOG_OPEN_MAIN_CAT:
            return {...state, mainCat: action.payload}
        case CATALOG_OPEN_CAT:
            return {...state, cat: action.payload}
        default:
            return state
    }
}