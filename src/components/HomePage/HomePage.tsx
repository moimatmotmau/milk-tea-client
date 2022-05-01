import React, { useEffect } from 'react';
import style from './HomePage.module.css';
import { Container, Row } from 'react-bootstrap';
import HomeCarousel from './Carousel/HomeCarousel';
import HotProduct from './HotProduct/HotProduct';
import NewEvent from './NewEvent/NewEvent';
import lineImg from './NewEvent/home_line.png';
import aboutBgImg from './banner_about_us.png';
import { Link } from 'react-router-dom';

const HomePage = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    
    return (
        <div className={style.home}>
            <HomeCarousel />
            <HotProduct />
            <section className={style.about}>
                <Container>
                    <Row>
                        <div className={style.about_wrap}>
                            <div className={style.about_bg_img}>
                                <img src={aboutBgImg} alt="bg-img" />
                            </div>
                            <div className={style.about_text}>
                                <h3 className={style.about_sub_title}>V-Milk Tea Story</h3>
                                <h3 className={style.about_title}>về chúng tôi</h3>
                                <div className={style.lineImg_wrap}>
                                    <img src={lineImg} alt="line img" />
                                </div>
                                <p className={style.about_description}>
                                    Bên cạnh niềm tự hào về những ly trà sữa ngon - sạch - tươi,
                                    chúng tôi luôn tự tin mang đến khách hàng những trải nghiệm tốt nhất về dịch vụ và không gian.
                                </p>
                                <div className={style.about_more_btn}>
                                    <Link to="/historyAndMission" className={style.about_more}>xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <NewEvent />
        </div>
    )
}

export default HomePage