import React from 'react';
import { connect } from 'react-redux'
import {
    InputGroup,
    InputLabel,
    OrderBlockContainer,
    OrderContainer,
    OrderGroup,
    OrderHead,
    OrderHeader,
    OrderHeadText,
    OrderInput,
    RadioChoose,
    RadioContainer,
    RadioHead,
    RadioInput,
    RadioSubhead
} from "./Order.styled";
import RadioBtn from "../ui-kit/RadioBtn";
import ShopButton from "../ui-kit/ShopButton";
import {
    changeOrderDeliveryDataCity,
    changeOrderDeliveryDataOffice,
    changeOrderDeliveryMethod,
    changeOrderEmail,
    changeOrderName,
    changeOrderPayMethod,
    changeOrderPhone
} from "../actions/order.action";


class Order extends React.Component{
    render() {
        const { contact, delivery, pay } = this.props.order
        const { changeOrderName, changeOrderPhone, changeOrderEmail, changeOrderDeliveryMethod, changeOrderDeliveryDataCity, changeOrderDeliveryDataOffice, changeOrderPayMethod } = this.props;
        return(
            <OrderContainer>
                <OrderHeader>Оформление заказа</OrderHeader>

                <OrderBlockContainer>
                    <OrderHead>1.</OrderHead>
                    <OrderHeadText>Контактные данные</OrderHeadText>

                    <OrderGroup>

                        <InputGroup>
                            <InputLabel for='name'>Имя и фамилия</InputLabel>
                            <OrderInput name='name'value={ contact.name } onChange={e => changeOrderName(e.target.value)}/>
                        </InputGroup>

                        <InputGroup>
                            <InputLabel for='phone'>Номер телефона</InputLabel>
                            <OrderInput name='phone' value={ contact.phone } onChange={e => changeOrderPhone(e.target.value)}/>
                        </InputGroup>

                        <InputGroup>
                            <InputLabel for='email'>Электронная почта</InputLabel>
                            <OrderInput name='email'value={ contact.email } onChange={e => changeOrderEmail(e.target.value)}/>
                        </InputGroup>

                    </OrderGroup>

                </OrderBlockContainer>

                <OrderBlockContainer>
                    <OrderHead>2.</OrderHead>
                    <OrderHeadText>Способ доставки</OrderHeadText>

                    <OrderGroup>

                        <RadioContainer onClick={() => changeOrderDeliveryMethod(true)} active={delivery.pickup}>
                            <div>
                                <RadioHead>Самовывоз из нашего склада</RadioHead>
                                <RadioSubhead>г.Киев, Небесной Сотни 34/3</RadioSubhead>
                            </div>
                            <RadioBtn active={delivery.pickup}/>
                        </RadioContainer>

                        <RadioContainer onClick={() => changeOrderDeliveryMethod(false)} active={!delivery.pickup}>
                            <div>
                                <RadioHead>Самовывоз из отделения Новой Почты</RadioHead>
                            </div>
                            <RadioBtn active={!delivery.pickup}/>
                        </RadioContainer>

                        { delivery.pickup ? '' :
                        <RadioChoose active={delivery.pickup}>
                            <RadioInput placeholder='Город' value={ delivery.city } onChange={e => changeOrderDeliveryDataCity(e.target.value)}/>
                            <RadioInput placeholder='Отделение №' value={ delivery.office } onChange={e => changeOrderDeliveryDataOffice(e.target.value)}/>
                        </RadioChoose>
                        }

                    </OrderGroup>

                </OrderBlockContainer>

                <OrderBlockContainer>
                    <OrderHead>3.</OrderHead>
                    <OrderHeadText>Способ оплаты</OrderHeadText>

                    <OrderGroup>

                        <RadioContainer onClick={() => changeOrderPayMethod(1)} active={pay.type === 1}>
                            <div>
                                <RadioHead>Наличными при получении</RadioHead>
                            </div>
                            <RadioBtn active={pay.type === 1}/>
                        </RadioContainer>

                        <RadioContainer onClick={() => changeOrderPayMethod(2)} active={pay.type === 2}>
                            <div>
                                <RadioHead>Онлайн картой Visa / Mastercard</RadioHead>
                            </div>
                            <RadioBtn active={pay.type === 2}/>
                        </RadioContainer>

                        <RadioContainer onClick={() => changeOrderPayMethod(3)} active={pay.type === 3}>
                            <div>
                                <RadioHead>Приват 24</RadioHead>
                            </div>
                            <RadioBtn active={pay.type === 3}/>
                        </RadioContainer>

                        <ShopButton green text='Подтвердить заказ' width='272'/>

                    </OrderGroup>
                </OrderBlockContainer>

            </OrderContainer>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        order: store.order
    }
}

export default connect(
    mapStateToProps,
    {changeOrderName, changeOrderPhone, changeOrderEmail, changeOrderDeliveryMethod, changeOrderDeliveryDataCity, changeOrderDeliveryDataOffice, changeOrderPayMethod}
)(Order)