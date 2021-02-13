import {
    CHANGE_ORDER_DELIVERY_DATA, CHANGE_ORDER_DELIVERY_DATA_CITY, CHANGE_ORDER_DELIVERY_DATA_OFFICE,
    CHANGE_ORDER_DELIVERY_METHOD,
    CHANGE_ORDER_EMAIL,
    CHANGE_ORDER_NAME,
    CHANGE_ORDER_PAY_METHOD,
    CHANGE_ORDER_PHONE
} from "../contants";

const initialState = {
    contact: {
        name: '',
        phone: '+380',
        email: '',
    },
    delivery: {
        pickup: true,
        data: {
            city: '',
            office: ''
        },
    },
    pay: {
        type: 1
    }
}

export default function orderReducer(state = initialState, action) {
    switch (action.type){
        case CHANGE_ORDER_NAME:
            return {...state,
                contact: {
                    name: action.payload
                }
            };
        case CHANGE_ORDER_PHONE:
            return {...state,
                contact: {
                    phone: action.payload
                }
            };
        case CHANGE_ORDER_EMAIL:
            return {...state,
                contact: {
                    email: action.payload
                }
            };

        case CHANGE_ORDER_DELIVERY_METHOD:
            return {...state,
                delivery: {
                    ...state.delivery,
                    pickup: action.payload
                }
            };
        case CHANGE_ORDER_DELIVERY_DATA_CITY:
            return {...state,
                delivery: {
                    data: {
                        ...state.delivery.data,
                        city: action.payload
                    }
                }
            };

        case CHANGE_ORDER_DELIVERY_DATA_OFFICE:
            return {...state,
                delivery: {
                    data: {
                        ...state.delivery.data,
                        office: action.payload
                    }
                }
            };

        case CHANGE_ORDER_PAY_METHOD:
            return {...state,
                pay: {
                    type: action.payload
                }
            };

        default:
            return state;
    }
}