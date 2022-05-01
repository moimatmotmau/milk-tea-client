import React from 'react'
import style from './Popup.module.css'
const OnlinePaymentFailPopup = (props:any) => {
    let {setPopupFailOrder}= props
  return (
    <div>
        <div className={style.container}>
                <div className={style.successMessagePopup}>
                    <div className={style.successMessagePopupTitle}>Thông báo</div>
                    <div className={style.successMessagePopupContent}>
                        <div className={style.orderResult}>
                            <div className={style.orderResultTitle}>Thanh toán thất bại!!!</div>
                            <div onClick={()=>{setPopupFailOrder(false)}} className={style.resultOk}>Đồng ý</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.overlay}></div>
    </div>
  )
}

export default OnlinePaymentFailPopup