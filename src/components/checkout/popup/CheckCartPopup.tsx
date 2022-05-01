import style from './Popup.module.css'
import { Link } from 'react-router-dom'
const CheckCartPopup = (props: any) => {
    let { setCheckCart } = props
    return (
        <div>
            <div className={style.container}>
                <div className={style.backToLoginMessage}>
                    <div className={style.backToLoginContent}>
                        <div className={style.backTitle}>Giỏ hàng trống, vui lòng chọn sản phẩm muốn mua!</div>
                        <div className={style.backButtons}>
                            <div onClick={() => setCheckCart(false)} className={`${style.okCart} ${style.button}`}><Link to="/product">Quay lại trang sản phẩm</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.overlay}></div>
        </div>
    )
}

export default CheckCartPopup