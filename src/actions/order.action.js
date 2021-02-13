import {
    CHANGE_ORDER_DELIVERY_DATA_CITY,
    CHANGE_ORDER_DELIVERY_DATA_OFFICE,
    CHANGE_ORDER_DELIVERY_METHOD,
    CHANGE_ORDER_EMAIL,
    CHANGE_ORDER_NAME,
    CHANGE_ORDER_PAY_METHOD,
    CHANGE_ORDER_PHONE,
} from "../contants";

export const changeOrderName = (name) => ({
    type: CHANGE_ORDER_NAME,
    payload: name
});

export const changeOrderPhone = (phone) => ({
    type: CHANGE_ORDER_PHONE,
    payload: phone
});

export const changeOrderEmail = (email) => ({
    type: CHANGE_ORDER_EMAIL,
    payload: email
});

export const changeOrderDeliveryMethod = (dMethod) => ({
    type: CHANGE_ORDER_DELIVERY_METHOD,
    payload: dMethod
});

export const changeOrderDeliveryDataCity = (dDataCity) => ({
    type: CHANGE_ORDER_DELIVERY_DATA_CITY,
    payload: dDataCity
});

export const changeOrderDeliveryDataOffice = (dDataOffice) => ({
    type: CHANGE_ORDER_DELIVERY_DATA_OFFICE,
    payload: dDataOffice
});

export const changeOrderPayMethod = (pMethod) => ({
    type: CHANGE_ORDER_PAY_METHOD,
    payload: pMethod
});

