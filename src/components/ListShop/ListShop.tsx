import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from './ListShop.module.css';
import banner from './banner_intro.png';
import RenderListShop from './RenderListShop';

const northApi = 'https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/north-shop';
const southApi = 'https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/south-shop';

const ListShop = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section className={styles.shop}>
            <div className={styles.banner}>
                <img src={banner} alt="banner" className={styles.banner_img} />
                <h2 className={styles.banner_title}>cửa hàng</h2>
            </div>
            <div className={styles.list_shop}>
                <Container>
                    <h2 className={styles.list_shop_title}>Cửa hàng</h2>
                    <RenderListShop api={northApi} area={'miền bắc'} />
                    <RenderListShop api={southApi} area={'miền nam'} />
                </Container>
            </div>
        </section>
    )
}

export default ListShop