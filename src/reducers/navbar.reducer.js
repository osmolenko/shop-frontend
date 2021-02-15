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
                    {name: 'Для ванной и туалета', link: '#'},
                    {name: 'Для стекла', link: '#'},
                    {name: 'Для кухни', link: '#'},
                    {name: 'Для мытья пола', link: '#'},

                ]
            },
                {
                    name: 'Средства гигиены',
                    data: [
                        {name: 'Для волос', link: '#'},
                        {name: 'Для тела', link: '#'},
                        {name: 'Для ухода за зубами', link: '#'},
                        {name: 'Дезодоранты', link: '#'},
                        {name: 'Для рук', link: '#'},
                        {name: 'Для ног', link: '#'},
                        {name: 'Ватные диски', link: '#'},
                    ]
                },
                {
                    name: 'Средства для стирки',
                    data: [
                        {name: 'Ручная стирка', link: '#'},
                        {name: 'Для стиральной машины', link: '#'},
                        {name: 'Мыло для стирки', link: '#'},
                    ]
                },
                {
                    name: 'Другое',
                    data: [
                        {name: 'Судочки для продуктов', link: '#'},
                        {name: 'Мочалка для душа', link: '#'},
                    ]
                }
            ]},
        {name: 'Продукты', data: [{
                name: 'Средства для чего-нибудь',
                data: [
                    {name: 'Для ванной и туалета', link: '#'},
                    {name: 'Для стекла', link: '#'},
                    {name: 'Для кухни', link: '#'},
                    {name: 'Для мытья пола', link: '#'},

                ]
            },
                {
                    name: 'Средства гигиены',
                    data: [
                        {name: 'Для ванной и туалета', link: '#'},
                        {name: 'Для стекла', link: '#'},
                        {name: 'Для кухни', link: '#'},
                        {name: 'Для мытья пола', link: '#'},

                    ]
                }
            ]}],
    catsData : {name: 'Продукты', data: [{
            name: 'Средства хуеты',
            data: [
                {name: 'Для ванной и туалета', link: '#'},
                {name: 'Для стекла', link: '#'},
                {name: 'Для кухни', link: '#'},
                {name: 'Для мытья пола', link: '#'},

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