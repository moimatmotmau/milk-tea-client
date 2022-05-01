import React from 'react'
import style from './Popup.module.css'
import { IoCloseCircle } from 'react-icons/io5'
const PromotionCodePopup = (props: any) => {
    let { setPromotionShow } = props
    return (
        <div>
            <div className={style.container}>
                <div className={style.promotionPopup}>
                    <div className={style.promotionPopupTitle}>Khuyến mãi</div>
                    <div onClick={() => { setPromotionShow(false) }} className={style.popUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                    <div className={style.timePopUpContent}>
                        <div className={style.timePopUpWrap}>
                            <div className={style.wrapPromotionPopup}>
                                <input name="promotionCodePopup" placeholder="Nhập mã khuyến mãi của bạn..." className={style.promotionCodePopup} />
                                <button type="button" className={style.wrapPromotionPopupBtn}>Sử dụng</button>
                            </div>
                            <div className={style.promotionPopupContent}>
                                <div>Bạn không có mã khuyến mãi nào!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => { setPromotionShow(false) }} className={style.overlay}></div>
        </div>
    )
}

export default PromotionCodePopup