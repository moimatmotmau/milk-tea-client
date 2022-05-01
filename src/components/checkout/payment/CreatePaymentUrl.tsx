import React from 'react'
import VnPay from './VnPay.json'
import style from './CreatePaymentUrl.module.css'
import paynowImg from './imgs/paynow.png'
import { useState, useEffect } from 'react'
import CryptoJS from 'crypto-js'
const CreatePaymentUrl = (props:any) => {
  let{products,setCheckout} = props
  const [myIps, setMyIps] = useState<string>('')
  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(res => setMyIps(res.ip))
  }, [])
  var ipAddr = myIps;
  var tmnCode = VnPay.vnp_TmnCode
  var returnUrl = VnPay.vnp_ReturnUrl
  var time = new Date()
  var month:string;
  if (time.getMonth() + 1 < 10) {
    month = `0${time.getMonth() + 1}`
  }
  else {
    month = `${time.getDate()}`
  }
  var date:string;
  if (time.getDate() < 10) {
    date = `0${time.getDate()}`
  } else {
    date = `${time.getDate()}`
  }
  var hour:string;
  if (time.getHours() < 10) {
    hour = `0${time.getHours()}`
  } else {
    hour = `${time.getHours()}`
  }
  var minute:string;
  if (time.getMinutes() < 10) {
    minute = `0${time.getMinutes()}`
  } else {
    minute = `${time.getMinutes()}`
  }
  var second:string;
  if (time.getSeconds() < 10) {
    second = `0${time.getSeconds()}`
  } else {
    second = `${time.getSeconds()}`
  }
  var createDate:number = Number(`${time.getFullYear()}${month}${date}${hour}${minute}${second}`);
  let total:number=18000;
  products.map((item:any)=>{
    return total+= (Number(item.price)+Number(item.topping.length*9000))* Number(item.quantitySelect);
  })
  var amount:number= total;
  var currCode:string = 'VND';
  // trim cách chuyển thành chuỗi
  var orderInfo:string = 'Thanh+toan+tra+sua:5'
  var orderType:string = 'other'
  var locale:string = "vn";
  var txnRef:number = createDate;

  const sortObj = (obj: any) => {
    return Object.keys(obj).sort().reduce((result: any, key: any) => {
      result[key] = obj[key];
      return result;
    }, {});
  }
  const paramss:object = {
    vnp_Amount: amount * 100,
    vnp_Command: 'pay',
    vnp_CreateDate: createDate,
    vnp_CurrCode: currCode,
    vnp_IpAddr: ipAddr,
    vnp_Locale: locale,
    vnp_OrderInfo: orderInfo,
    vnp_OrderType: orderType,
    vnp_ReturnUrl: returnUrl,
    vnp_TmnCode: tmnCode,
    vnp_TxnRef: txnRef,
    vnp_Version: '2.1.0',
  }
  let sortedParams = sortObj(paramss);
  console.log("params:", sortedParams)
  let contentUrl = ``
  let j = 0;
  Object.keys(sortedParams).forEach((key) => {
    if (j === 1) {
      contentUrl += `&${encodeURIComponent(key)}=${encodeURIComponent(sortedParams[key])}`
    } else {
      contentUrl += `${encodeURIComponent(key)}=${encodeURIComponent(sortedParams[key])}`
      j = 1;
    }
  });
  let secureKey = CryptoJS.HmacSHA512(contentUrl, VnPay.vnp_HashSecret).toString(CryptoJS.enc.Hex)

  const url = `?${contentUrl}&vnp_SecureHash=${secureKey}`
  return (
    <div className={style.container}>
      <div className={style.payButton}>
        <a className={style.button} href={`${VnPay.vnp_Url}${url}`} >Thanh toán VnPay</a>
        <img alt="VNPAY - Thanh toan online" className="btnPopup" src={paynowImg} />
      </div>
      <div onClick={()=>{setCheckout(false)}} className={style.overlay}></div>
    </div>
  )
}

export default CreatePaymentUrl