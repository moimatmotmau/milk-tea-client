import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './ReturnPaymentResult.module.css'
import axios from 'axios'
import { IUser, ICart, IOrders } from '../../../interfaces/models'
import OnlinePaymentSuccessPopup from '../popup/OnlinePaymentSuccessPopup'
import OnlinePaymentFailPopup from '../popup/OnlinePaymentFailPopup'
import {usersApi, ordersApi } from '../../../api/index'


const ReturnPaymentResult = () => {
  let formData: any = JSON.parse(localStorage.getItem('OnlSuccessPaymentData') as any)
  const url_string = window.location.href;
  const urll = new URL(url_string);
  const value = urll.searchParams;

  const user: IUser = JSON.parse(localStorage.getItem("account") as any)
  const locStorageCart: ICart[] = JSON.parse(localStorage.getItem("cart") as any)
  const api = axios.create({
    baseURL: `${usersApi}`
  })
  const orderApi = axios.create({
    baseURL: `${ordersApi}`
  })
  const getUser = async () => {
    try {
      let userr = await api.get(`/${user._id}`)
        .then(({ data }) => data)
      localStorage.setItem('account', JSON.stringify(userr))
    }
    catch (err) {
      console.log(" Có lỗi khi lấy user/user không tồn tại: ", err)
    }
  }
  const updateOrder = async (value: IOrders[]) => {
    await api
      .put(`/${user._id}`, { ...user, orders: value })
      .catch(err => console.log(err))
  }
  const updateCart = async (value: ICart[]) => {
    await api
      .put(`/${user._id}`, { ...user, cart: value })
      .catch(err => console.log(err))
  }
  const updateOrders = async (value: IOrders) => {
    await orderApi
      .post(`/`, { ...value })
      .catch(err => console.log(err))
  }
  const [popupSuccessOrder, setPopupSuccessOrder] = useState<boolean>(false)
  const [popupFailOrder, setPopupFailOrder] = useState<boolean>(false)
  const time = new Date();
  let hour = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`
  let minute = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`
  let seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : `${time.getSeconds()}`
  useEffect(() => {
    if (value.get('vnp_ResponseCode') === '00') {
      setPopupSuccessOrder(true)
      setPopupFailOrder(false)
      if (user.username !== "") {
        let value1: any[] = [...locStorageCart]
        let value2: any[] = value1.map((value) => {
          return value = { name: value.name, size: value.size, ice: value.ice, sugar: value.sugar, quantitySelect: value.quantitySelect, price: value.price, total: Number(value.quantitySelect) * Number(value.price) + 18000, topping: value.topping }
        })
        const orderss: IOrders = {
          username: user.username,
          phone: String(formData.phone) || String(user.phone),
          address: formData.location,
          orders: value2,
          paid: true,
          status: "1",
          fullName: formData.name || user.fullName,
          time: `${hour}:${minute}:${seconds}  ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`,
          // id: ""
        }
        user.orders = [...user.orders, orderss]
        api.get(`${user._id}`)
            .then(()=>{updateOrder(user.orders)})
        updateOrders(orderss)
        updateCart([])
        getUser()
      }
      else {
        let value1: any[] = [...locStorageCart]
        let value2: any[] = value1.map((value) => {
          return value = { name: value.name, size: value.size, ice: value.ice, sugar: value.sugar, quantitySelect: value.quantitySelect, price: value.price, total: Number(value.quantitySelect) * Number(value.price) + 18000, topping: value.topping }
        })
        const ordersnotlogin: IOrders = {
          username: user.fullName || 'user is not register account',
          phone: String(formData.phone),
          address: formData.location,
          orders: value2,
          paid: true,
          status: "1",
          fullName: formData.name,
          time: `${hour}:${minute}:${seconds}  ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`,
          // id: ""
        }
        updateOrders(ordersnotlogin);
      }
      localStorage.setItem("cart", JSON.stringify([]));
    }
    else {
      setPopupSuccessOrder(false)
      setPopupFailOrder(true)
      if (user.username !== ""){
        updateCart([])
      }
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, [value.get('vnp_ResponseCode')])
  return (
    <div className={style.container}>
      {popupSuccessOrder && <OnlinePaymentSuccessPopup setPopupSuccessOrder={(a: boolean) => { setPopupSuccessOrder(a) }} />}
      {popupFailOrder && <OnlinePaymentFailPopup setPopupFailOrder={(a: boolean) => { setPopupFailOrder(a) }} />}
      <table className={style.table}>
        <thead>
          <tr>
            <th colSpan={2} className={`${style.header} ${style.column}`}>VnPay response{value.get('phone')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${style.column}`}>Mã đơn hàng</td>
            <td className={`${style.column}`}>{value.get('vnp_TxnRef')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Số tiền</td>
            <td className={`${style.column}`}>{Number(value.get('vnp_Amount')) / 100}  vnd</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Nội dung thanh toán</td>
            <td className={`${style.column}`}>{(value.get('vnp_OrderInfo')as any).replaceAll('+', ' ')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Mã phản hồi</td>
            <td className={`${style.column}`}>{value.get('vnp_ResponseCode')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Mã giao dịch tại vnpay</td>
            <td className={`${style.column}`}>{value.get('vnp_TransactionNo')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Mã ngân hàng</td>
            <td className={`${style.column}`}>{value.get('vnp_BankCode')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Thời gian thanh toán</td>
            <td className={`${style.column}`}>{value.get('vnp_PayDate')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Trạng thái</td>
            {value.get('vnp_ResponseCode') === '00'
              ? <td className={`${style.column}`} style={{ color: 'blue' }}>Thanh toán thành công</td>
              : <td className={`${style.column}`} style={{ color: 'red' }}>Thanh toán thất bại</td>
            }
          </tr>
        </tbody>
      </table>
      <div className={style.buttons}>
        <Link className={style.returnButton} to="/product">Quay lại trang sản phẩm</Link>
        <Link className={style.returnButton} to="/account/order">Xem đơn hàng</Link>
      </div>
    </div>
  )
}

export default ReturnPaymentResult