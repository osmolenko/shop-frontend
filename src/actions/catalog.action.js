import {CATALOG_OPEN_CAT, CATALOG_OPEN_MAIN_CAT} from "../contants";

export const catalogOpenMainCat = (catalogOpenMainCatIndex) => ({
    type: CATALOG_OPEN_MAIN_CAT,
    payload: catalogOpenMainCatIndex
})

export const catalogOpenCat = (catalogOpenCatIndex) => ({
    type: CATALOG_OPEN_CAT,
    payload: catalogOpenCatIndex
})