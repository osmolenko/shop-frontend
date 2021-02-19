

const initialState = {
    product: {
        name: 'Английская соль для ванн Relaxing Lavender',
        art: '12414405',
        status: true,
        price: 120,
        smallInfo: 'Морская соль - это богатый природный концентрат соли и микроэлементов, необходимых для нормальной работы всех органов тела. Благодаря тонизирующей действия, лаванда справедливо считается «растением № 1» в ароматерапии.',
        options: ["110г.", "150г.", "250г."],
        features: {
            text: 'Эфирное масло лаванды помогает при бессоннице, подавленном состоянии, головной боли. Кроме того, масло лаванды является незаменимым помощником для ухода за проблемной кожей, в лечении ран. Ароматная ванна снимает усталость, стрессовое напряжение, повышает работоспособность и улучшает настроение.',
            data: [
                {"type":"Производитель", "data":"Латвия"},
                {"type":"Состав", "data":"Морская соль, масло лаванды"},
                {"type":"Тип аромата", "data":"Лаванда"},
                {"type":"Тип кожи", "data":"Все типы"},
                {"type":"Бренд", "data":"Aura Cacia"},
                {"type":"Для кого", "data":"Унисекс"},
            ],
        },
        images: [
            {src: 'https://s3.images-iherb.com/aur/aur91696/y/14.jpg', alt: 'Вид спереди'},
            {src: 'https://s3.images-iherb.com/aur/aur91696/y/14.jpg', alt: 'Вид сбоку'},
            {src: 'https://s3.images-iherb.com/aur/aur91696/y/14.jpg', alt: 'Вид сзади'},
        ],
        more: [
            { img: 'https://s3.images-iherb.com/aur/aur91696/y/14.jpg', name: 'Английская соль для ванн Relaxing Lavender, 110 г', link: '#', art: '12414405', price:'120', status: true },
            { img: 'https://s3.images-iherb.com/peo/peo59610/y/2.jpg', name: 'Клюква сушеная', link: '#', art: '12414405', price:'120', status: true },
            { img: 'https://s3.images-iherb.com/cgn/cgn01756/y/0.jpg', name: 'Чай травяной', link: '#', art: '12414405', price:'120', status: false },
        ],
    }
}

export default function productReducer(state = initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}

