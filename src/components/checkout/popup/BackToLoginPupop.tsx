import React from 'react'
import style from './Popup.module.css'
import { Link } from 'react-router-dom'
const BackToLoginPupop = (props: any) => {
    let { setBackToLogin } = props
    return (
        <div>
            <div className={style.container}>
                <div className={style.backToLoginMessage}>
                    <div className={style.backToLoginContent}>
                        <div className={style.backTitle}>Bạn chưa đăng nhập !<br/> Thông tin đặt hàng của bạn sẽ không được lưu. Bạn có muốn tiếp tục ?</div>
                        <div className={style.backButtons}>
                            <div onClick={() => setBackToLogin(false)} className={`${style.ok} ${style.button}`}>Tiếp tục<br/> mua hàng</div>
                            <div onClick={() => setBackToLogin(false)} className={`${style.cancel} ${style.button}`}><Link to="/login">Về trang<br/> đăng nhập</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.overlay}></div>
        </div>
    )
}

export default BackToLoginPupop