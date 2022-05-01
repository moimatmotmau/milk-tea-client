import React from 'react'
import style from './Popup.module.css'
import { IoCloseCircle } from 'react-icons/io5'

const DeliveryTimePopup = (props: any) => {
    let { setShow, setHour, setMinute, handleSetTimeSelected } = props
    return (
        <div className={style.deliveryTimePopup}>
            <div className={style.container}>
                <div className={style.timePopUpTitle}>Thời gian giao hàng</div>
                <div onClick={() => { setShow(false) }} className={style.popUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                <div className={style.timePopUpContent}>
                    <div className={style.timePopUpWrap}>
                        <div className={style.wrapSelectTime}>
                            <select onChange={(e: any) => { setHour(e.target.value) }} name="hour" className={style.hour}>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                            </select>
                            <select onChange={(e: any) => { setMinute(e.target.value) }} name="minute" className={style.minute}>
                                <option value="0">00</option>
                                <option value="5">05</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                                <option value="40">40</option>
                                <option value="45">45</option>
                                <option value="50">50</option>
                                <option value="55">55</option>
                            </select>
                        </div>
                        <button onClick={() => { handleSetTimeSelected() }} type="button" className={style.wrapSelectTimeBtn}>XONG</button>
                    </div>
                </div>
            </div>
            <div className={style.overlay}></div>
        </div>
    )
}

export default DeliveryTimePopup