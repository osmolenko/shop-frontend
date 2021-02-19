import {
    CHOOSE_MAIN_CAT,
    CLOSE_CATS,
    CLOSE_MOBILE_NAVBAR,
    GET_CATS_MORE_DATA,
    OPEN_CATS,
    OPEN_MOBILE_NAVBAR
} from "../contants";


const initialState = {
    navbarExpand: false,
    catsExpand: false,
    initialData: [
        {name: 'Товары для дома', data: [{
                name: 'Средства для уборки',
                data: [
                    {name: 'Для ванной и туалета', link: '#', id: ""},
                    {name: 'Для стекла', link: '#', id: ""},
                    {name: 'Для кухни', link: '#', id: ""},
                    {name: 'Для мытья пола', link: '#', id: ""},

                ]
            },
                {
                    name: 'Средства гигиены',
                    data: [
                        {name: 'Для волос', link: '#', id: ""},
                        {name: 'Для тела', link: '#', id: ""},
                        {name: 'Для ухода за зубами', link: '#', id: ""},
                        {name: 'Дезодоранты', link: '#', id: ""},
                        {name: 'Для рук', link: '#', id: ""},
                        {name: 'Для ног', link: '#', id: ""},
                        {name: 'Ватные диски', link: '#', id: ""},
                    ]
                },
                {
                    name: 'Средства для стирки',
                    data: [
                        {name: 'Ручная стирка', link: '#', id: ""},
                        {name: 'Для стиральной машины', link: '#', id: ""},
                        {name: 'Мыло для стирки', link: '#', id: ""},
                    ]
                },
                {
                    name: 'Другое',
                    data: [
                        {name: 'Судочки для продуктов', link: '#', id: ""},
                        {name: 'Мочалка для душа', link: '#', id: ""},
                    ]
                }
            ]},
        {name: 'Продукты', data: [{
                name: 'Средства для чего-нибудь',
                data: [
                    {name: 'Для ванной и туалета', link: '#', id: ""},
                    {name: 'Для стекла', link: '#', id: ""},
                    {name: 'Для кухни', link: '#', id: ""},
                    {name: 'Для мытья пола', link: '#', id: ""},

                ]
            },
                {
                    name: 'Средства гигиены',
                    data: [
                        {name: 'Для ванной и туалета', link: '#', id: ""},
                        {name: 'Для стекла', link: '#', id: ""},
                        {name: 'Для кухни', link: '#', id: ""},
                        {name: 'Для мытья пола', link: '#', id: ""},

                    ]
                }
            ]}],
    catsData : {name: 'Продукты', data: [{
            name: 'Средства хуеты',
            data: [
                {name: 'Для ванной и туалета', link: '#', id: ""},
                {name: 'Для стекла', link: '#', id: ""},
                {name: 'Для кухни', link: '#', id: ""},
                {name: 'Для мытья пола', link: '#', id: ""},

            ]
        }]},
    chosenMainCat : 0
}

export default function navbarReducer(state = initialState, action) {
    switch (action.type){
        case OPEN_MOBILE_NAVBAR:
            return {...state, navbarExpand: true};
        case CLOSE_MOBILE_NAVBAR:
            return {...state, navbarExpand: false};
        case OPEN_CATS:
            return {...state, catsExpand: true};
        case CLOSE_CATS:
            return {...state, catsExpand: false};
        case GET_CATS_MORE_DATA:
            return {
                ...state,
                catsData: state.initialData[action.payload]
            };
        case CHOOSE_MAIN_CAT:
            return {...state, chosenMainCat: action.payload};
        default:
            return state;
    }
}


