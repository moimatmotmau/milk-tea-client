import styles from './BodyNews.module.css'
import CategorySideBar from './categorySideBar/CategorySideBar'
import Commercial_story from './commercial_story/Commercial_story'
import Promotional_news from './promotional news/Promotional_news'
import Sk_events from './sk_events/Sk_events'
import { useRecoilState } from 'recoil';
import {cateSelectedState} from '../../../recoilProvider/cateSelectedState'

import MainNews from './MainNews'


const BodyNews = () => {
    const [cateSelected, setCateSelected] = useRecoilState(cateSelectedState)
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
                <CategorySideBar cateSelected={cateSelected} setCateSelected={(a:any)=>setCateSelected(a)}/>
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