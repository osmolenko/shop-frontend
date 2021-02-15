import {
    CHOOSE_MAIN_CAT,
    CLOSE_CATS,
    CLOSE_MOBILE_NAVBAR,
    GET_CATS_MORE_DATA,
    OPEN_CATS,
    OPEN_MOBILE_NAVBAR
} from "../contants";

export const openMobileNavbar = () => ({
    type: OPEN_MOBILE_NAVBAR,
});

export const closeMobileNavbar = () => ({
    type: CLOSE_MOBILE_NAVBAR,
});

export const openCats = () => ({
    type: OPEN_CATS,
});

export const closeCats = () => ({
    type: CLOSE_CATS,
});

export const getCatsMoreData = (getCatsMoreDataIndex) => ({
    type: GET_CATS_MORE_DATA,
    payload: getCatsMoreDataIndex,
});


export const chooseMainCat = (chooseMainCatIndex) => ({
    type: CHOOSE_MAIN_CAT,
    payload: chooseMainCatIndex
});

export const chooseCategory = (index) => (dispatch) => {
    dispatch(getCatsMoreData(index));
    dispatch(chooseMainCat(index));
}


