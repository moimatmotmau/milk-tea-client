import style from './Popup.module.css'
const OnlinePaymentSuccessPopup = (props:any) => {
let {setPopupSuccessOrder} = props
    return (
        <div>
            <div className={style.container}>
                <div className={style.successMessagePopup}>
                    <div className={style.successMessagePopupTitle}>Thông báo</div>
                    <div className={style.successMessagePopupContent}>
                        <div className={style.orderResult}>
                            <div className={style.orderResultTitle}>Đặt hàng thành công!</div>
                            <div onClick={()=>{setPopupSuccessOrder(false)}} className={style.resultOk}>Đồng ý</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.overlay}></div>
        </div>
    )
}

export default OnlinePaymentSuccessPopup