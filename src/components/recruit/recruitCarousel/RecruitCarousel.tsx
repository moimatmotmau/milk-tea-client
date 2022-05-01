import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import style from "./RecruitCarousel.module.css";
// import fonts
import "../fonts/vietnameseFonts/MijasUltra.otf";
import "../fonts/vietnameseFonts/Gotham-Medium.otf";
// icons
// images
import fisrtSlide from "../img/slideshow1_1.png";
import secondSlide from "../img/slideshow1_2 (1).jpg";
const RecruitCarousel: React.FC<any>= ({idH3}) => {
  const [index, setIndex] = useState<number>(0);
  const [scroll, setScroll] = useState<string>("");
  useEffect(() => {
    setScroll(idH3)
  })
  return (
    <div>
      <Carousel
        className={style.container}
        fade
        activeIndex={index}
        onSelect={(selectedIndex)=>{setIndex(selectedIndex)}}
      >
        <Carousel.Item interval={5000}>
        <div className={style.BgCover}></div>
          <img className="d-block w-100" src={fisrtSlide} alt="First slide" />
          <Carousel.Caption className={style.CarouselCaption}>
            <h3 className={style.text1}>Cơ hội nghề nghiệp</h3>
            <h3 className={style.text2}>
              TRỞ THÀNH THÀNH VIÊN TRONG <br /> GIA ĐÌNH TOCOTOCO TEA
            </h3>
            <a href={`#${scroll}`} className={style.carouselButton} type="button">Các vị trí hiện tại</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <div className={style.BgCover}></div>
          <img className="d-block w-100" src={secondSlide} alt="Second slide" />
          <Carousel.Caption className={style.CarouselCaption}>
            <h3 className={style.text1}>Cơ hội nghề nghiệp</h3>
            <h3 className={style.text2}>
              TRỞ THÀNH THÀNH VIÊN TRONG <br /> GIA ĐÌNH TOCOTOCO TEA
            </h3>
            <a href={`#${scroll}`}  className={style.carouselButton} type="button">Các vị trí hiện tại</a>           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default RecruitCarousel;
