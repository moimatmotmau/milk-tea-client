import style from './Popup.module.css'
import { IoCloseCircle } from 'react-icons/io5'
const SearchBoxPopup = (props: any) => {
    let { setCheckSearchBox, searchAddress, list, handleLocationOnClick } = props
    return (
        <div>
            <div className={style.searchBox}>
                <div onClick={() => { setCheckSearchBox(false) }} className={style.popUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                {searchAddress && list.map((item: any) => {
                    return (
                        <div key={item.properties.id} onClick={() => { handleLocationOnClick(item) }} className={style.searchItem}>
                            <div className={style.name}>{item.properties.name}</div>
                            <div className={style.fullname}>{item.properties.fullname}</div>
                        </div>)
                })}
            </div>
        </div>
    )
}
export default SearchBoxPopup