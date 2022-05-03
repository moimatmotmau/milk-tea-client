import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { BsMouse } from 'react-icons/bs';
import style from './HomeCarousel.module.css'
import slide1 from './rose.png';
import slide2 from './slideshow1_2.png';
import slide3 from './milktea.png';

const HomeCarousel = () => {
    return (
        <Carousel className={style.carousel}>
            <Carousel.Item className={style.carousel_item}>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption className={style.carousel_caption}>
                    <h3 className={style.carousel_vmilk}>V-Milk Tea</h3>
                    <h2 className={style.carousel_title}>đậm vị thiên nhiên<br /> trọn vị hạnh phúc</h2>
                    <p className={style.carousel_description}>
                        Với sứ mệnh mang tới niềm vui và hạnh phúc, V-Milk Tea hy vọng sẽ tạo nên<br />
                        một nét văn hóa giải trí bên cạnh ly trà sữa Ngon - sạch - tươi
                    </p>
                    <Link to="/product" className={style.carousel_link}>Đặt hàng ngay</Link>
                    <div className={style.carousel_scroll}>
                        <BsMouse className={style.carousel_scroll_icon} />
                        <p>Cuộn xuống</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.carousel_item}>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption className={style.carousel_caption}>
                    <h3 className={style.carousel_vmilk}>V-Milk Tea</h3>
                    <h2 className={style.carousel_title}>đậm vị thiên nhiên<br /> trọn vị hạnh phúc</h2>
                    <p className={style.carousel_description}>
                        Với sứ mệnh mang tới niềm vui và hạnh phúc, V-Milk Tea hy vọng sẽ tạo nên<br />
                        một nét văn hóa giải trí bên cạnh ly trà sữa Ngon - sạch - tươi
                    </p>
                    <Link to="/product" className={style.carousel_link}>Đặt hàng ngay</Link>
                    <div className={style.carousel_scroll}>
                        <BsMouse className={style.carousel_scroll_icon} />
                        <p>Cuộn xuống</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={style.carousel_item}>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption className={style.carousel_caption}>
                    <h3 className={style.carousel_vmilk}>V-Milk Tea</h3>
                    <h2 className={style.carousel_title}>đậm vị thiên nhiên<br /> trọn vị hạnh phúc</h2>
                    <p className={style.carousel_description}>
                        Với sứ mệnh mang tới niềm vui và hạnh phúc, V-Milk Tea hy vọng sẽ tạo nên<br />
                        một nét văn hóa giải trí bên cạnh ly trà sữa Ngon - sạch - tươi
                    </p>
                    <Link to="/product" className={style.carousel_link}>Đặt hàng ngay</Link>
                    <div className={style.carousel_scroll}>
                        <BsMouse className={style.carousel_scroll_icon} />
                        <p>Cuộn xuống</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeCarousel