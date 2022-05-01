import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './HotProduct.module.css'
import homeLine from './home_line.png';
import { Link } from 'react-router-dom';
import { productState } from '../../../recoilProvider/productProvider';
import {productsApi} from '../../../api/index'

interface HotProductData {
    name: string;
    price: number;
    image: string;
    description: string;
    salePrice?: string;
    id: string;
}


const HotProduct = () => {
    const [datas, setDatas] = useState<HotProductData[]>([]);
    const [product, setProduct] = useRecoilState(productState);

    async function fetchData() {
        let response = await axios(`${productsApi}`);
        let hotProduct = await response.data;
        setDatas([...hotProduct.reverse().splice(0, 8)]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleClick = (data: any) => {
        setProduct(data)
    }

    return (
        <section className={styles.hot_product}>
            <Container>
                <Row>
                    <div className={styles.title_wrap}>
                        <h3 className={styles.title}>V-Milk Tea Menu</h3>
                        <h2 className={styles.sub_title}>sản phẩm nổi bật</h2>
                        <div className={styles.img_wrap}>
                            <img src={homeLine} alt="home line" className={styles.line_img} />
                        </div>
                    </div>
                </Row>
                <Row>
                    {datas.map(data => {
                        return (
                            <Col md={3} xs={6} key={data.id}>
                                <Link to='/product' className={styles.product_card} onClick={() => handleClick(data)}>
                                    <div className={styles.product_img_wrap}>
                                        <img src={data.image} alt="any" className={styles.product_img} />
                                    </div>
                                    <div className={styles.product_info_wrap}>
                                        <h2 className={styles.products_name}>{data.name}</h2>
                                        <p className={styles.products_price}>
                                            {data.salePrice && <span className={styles.products_price_sale}>{Number(data.salePrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>}
                                            {(data.salePrice &&
                                                <span className={`${styles.products_price_origin} ${styles.disabled}`}>{Number(data.price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>)
                                                ||
                                                <span className={styles.products_price_origin}>{Number(data.price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                            }
                                        </p>
                                        <button className={styles.products_order}>đặt hàng</button>
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
                <Row >
                    <div className={styles.all_products}>
                        <Link to='/product' className={styles.all_products_link}>xem tất cả</Link>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default HotProduct