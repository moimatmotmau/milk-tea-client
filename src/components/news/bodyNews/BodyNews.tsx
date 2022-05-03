import styles from './BodyNews.module.css'
import Commercial_story from './commercialStory/CommercialStory'
import Promotional_news from './promotionalNews/PromotionalNews'
import Sk_events from './skEvents/SkEvents'
import { useRecoilState } from 'recoil';
import {cateSelectedState} from '../../../recoilProvider/cateSelectedState'
import {useEffect, useRef} from 'react'
import MainNews from './MainNews'

const BodyNews = () => {
    const [cateSelected, setCateSelected] = useRecoilState(cateSelectedState)
    const Commercial = useRef<any>()
    const Promotion = useRef<any>()
    const skEvent = useRef<any>()
    useEffect(() => {
        if (cateSelected === '') {
            skEvent.current.classList.remove(`${styles.activeCate}`)
            Promotion.current.classList.remove(`${styles.activeCate}`)
            Commercial.current.classList.remove(`${styles.activeCate}`)
        } 
    })
    const handleCommercialSelected = () => {
        setCateSelected('commercial_story')
        skEvent.current.classList.remove(`${styles.activeCate}`)
        Promotion.current.classList.remove(`${styles.activeCate}`)
        Commercial.current.classList.add(`${styles.activeCate}`)
    }
    const handlePromotionSelected = () => {
        setCateSelected('promotional_news')
        Commercial.current.classList.remove(`${styles.activeCate}`)
        skEvent.current.classList.remove(`${styles.activeCate}`)
        Promotion.current.classList.add(`${styles.activeCate}`)
    }
    const handleSkEventSelected = () => {
        setCateSelected('sk_events')
        Commercial.current.classList.remove(`${styles.activeCate}`)
        Promotion.current.classList.remove(`${styles.activeCate}`)
        skEvent.current.classList.add(`${styles.activeCate}`)
    }
    return (
        <div className={styles.category}>
            <div className={styles.category_top_banner}>
                {
                    cateSelected === 'commercial_story'
                    ? 'Câu chuyện thương hiệu'
                    : (cateSelected === 'promotional_news')
                        ? 'Tin tức khuyến mãi'
                        : (cateSelected === 'sk_events')
                            ? 'Sự kiện' : 'Tin tức'
                }
            </div>
            <div className={`${styles["category_content"]} ${styles["container"]}`}>
                {/* <CategorySideBar cateSelected={cateSelected} setCateSelected={(a:any)=>setCateSelected(a)}/> */}
                <div className={styles.category_side_bar}>
                <div className={styles.category_menu}>
                    <div className={styles.category_menu_title}>Danh mục tin tức</div>
                    <div className={styles.category_menu_content}>
                        <div className={styles.menu_category_menu}>
                            <ul id={styles.menu_category_menu} className={`${styles.menu} ${styles.ulist}`}>
                                <li ref={Commercial} onClick={() => handleCommercialSelected()} className={`${styles.menu_item}`}>
                                    <div>Câu chuyện thương hiệu</div>
                                </li>
                                <li ref={Promotion} onClick={() => handlePromotionSelected()} className={`${styles.menu_item}`}>
                                    <div>Tin tức khuyến mại</div>
                                </li>
                                <li ref={skEvent} onClick={() => handleSkEventSelected()} className={`${styles.menu_item}`}>
                                    <div> Sự kiện </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.list_tags}>
                    <div className={styles.list_tags_title}>Từ khóa</div>
                    <a className={`${styles.post_tag} ${styles.alink}`} href='#' >
                        covid_19                    </a>
                    <a className={`${styles.post_tag} ${styles.alink}`} href='#' >
                        danh sách cửa hàng V-Milk Tea áp dụng ctkm                    </a >
                    <a className={`${styles.post_tag} ${styles.alink}`} href='#'>
                        V-Milk Tea                    </a >
                    <a className={`${styles.post_tag} ${styles.alink}`} href='#'>
                        trà sữa 25k                    </a >
                    <a className={`${styles.post_tag} ${styles.alink}`} href='#'>
                        trọn vị hạnh phúc                    </a >
                </div >
            </div >
                {
                    cateSelected === 'commercial_story'
                        ? <Commercial_story />
                        : (cateSelected === 'promotional_news')
                            ? <Promotional_news />
                            : (cateSelected === 'sk_events')
                                ? <Sk_events /> : <MainNews />
                }
            </div >
        </div >
    )
}

export default BodyNews