import React from 'react';
import {
    BoldDataText,
    DataText,
    DeliveryBlockContainer,
    DeliveryContainer,
    HeaderText, PayContainer, PayMethodContainer,
    SubHeaderText,
    TableArrowColumn,
    TableContainer,
    TableDataColumn, TableDeliveryColumn, TableOrderColumn,
    TableRow,
    TextAdd
} from "./Delivery.styled";
import order from '../images/order.png'
import deliveryIco from '../images/deliveryico.png'
import arrowRight from '../images/delivery_arrow_right.png'

export default class Delivery extends React.Component{
    render() {
        return(
            <DeliveryBlockContainer>
                <DeliveryContainer>

                    <HeaderText>Доставка товаров</HeaderText>
                    <SubHeaderText>График отправлений заказов:</SubHeaderText>

                    <TableContainer>

                        <TableRow>
                            <TableOrderColumn>
                                <img src={order} alt='order'/>
                                <DataText>Заказ в понедельник</DataText>
                            </TableOrderColumn>
                            <TableArrowColumn>
                                <img src={arrowRight} alt='arrow'/>
                            </TableArrowColumn>
                            <TableDeliveryColumn>
                                <img src={deliveryIco} alt='delivery'/>
                                <DataText>Отправка во вторник</DataText>
                            </TableDeliveryColumn>
                        </TableRow>

                        <TableRow>
                            <TableOrderColumn>
                                <img src={order} alt='order'/>
                                <DataText>Заказ во вторник</DataText>
                            </TableOrderColumn>
                            <TableArrowColumn>
                                <img src={arrowRight} alt='arrow'/>
                            </TableArrowColumn>
                            <TableDeliveryColumn>
                                <img src={deliveryIco} alt='delivery'/>
                                <DataText>Отправка в среду</DataText>
                            </TableDeliveryColumn>
                        </TableRow>

                        <TableRow>
                            <TableOrderColumn>
                                <img src={order} alt='order'/>
                                <DataText>Заказ в среду/четверг</DataText>
                            </TableOrderColumn>
                            <TableArrowColumn>
                                <img src={arrowRight} alt='arrow'/>
                            </TableArrowColumn>
                            <TableDeliveryColumn>
                                <img src={deliveryIco} alt='delivery'/>
                                <DataText>Отправка в пятницу</DataText>
                            </TableDeliveryColumn>
                        </TableRow>

                        <TableRow>
                            <TableOrderColumn>
                                <img src={order} alt='order'/>
                                <DataText>Сб / вс - выходные, заказ будет обработан в понедельник</DataText>
                            </TableOrderColumn>
                        </TableRow>



                    </TableContainer>

                    <TextAdd>
                        * Отправка осуществляется в указанные дни, при условии, что заказ сделан до 18:00.
                    </TextAdd>

                </DeliveryContainer>

                <PayContainer>
                    <HeaderText>Оплата заказа</HeaderText>
                    <SubHeaderText>Условия оплаты заказов:</SubHeaderText>

                    <PayMethodContainer>
                        <div><BoldDataText>При самовывозе:</BoldDataText></div>
                        <div>
                            <DataText>— Возможна оплата наличными при получении;</DataText>
                            <br/>
                            <DataText>— Безналичный расчет при получении;</DataText>
                        </div>

                    </PayMethodContainer>

                    <PayMethodContainer>
                        <div><BoldDataText>Оплата через сайт:</BoldDataText></div>
                        <div>
                            <DataText>— Оплата через Приват 24 на сайте;</DataText>
                            <br/>
                            <DataText>— Онлайн картой Visa / Mastercard;</DataText>
                        </div>

                    </PayMethodContainer>

                </PayContainer>
            </DeliveryBlockContainer>
        )
    }
}