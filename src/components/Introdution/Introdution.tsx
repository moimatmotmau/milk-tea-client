import React, { useEffect } from "react";
import "./Introdution.css";
import { Link } from "react-router-dom";
import intro_his from './imgs/banner_intro.png'
import image1 from './imgs/image1.jpg'
import image2 from './imgs/image2.jpg'


export default function HistoryAndMission() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <div className="container-fruid">
        <div className="col">
          <div className="row-lg-12 slider">
            <div className="sliderBanner">
              <img src={intro_his} alt="banner intro" />
            </div>
            <div className="sliderTitle">Giới thiệu</div>
          </div>
          <div className="row-md-3 row cups">
            <div className="row-md-3 col-lg-12 cups-title">Giới thiệu</div>
            <p className="cups-intro col-12">
              Luôn tâm huyết với việc khai thác nguồn nông sản Việt Nam để tạo
              ra những ly thức uống tươi ngon, an toàn và giàu giá trị dinh
              dưỡng, V-Milk Tea mở cửa hàng đầu tiên vào năm 2013, mang trong mình
              lòng đam mê và khát vọng xây dựng một thương hiệu trà sữa thuần
              Việt, mang đậm hương vị quê hương.V-Milk Tea tin rằng thưởng thức
              một ly trà sữa được pha chế từ trà Mộc Châu, trân châu từ sắn dây
              Nghệ An hay mứt dâu tằm từ Đà Lạt sẽ là những trải nghiệm hoàn
              toàn khác biệt và tuyệt vời nhất cho những khách hàng của mình.
            </p>
            <p className="cups-intro col-12">
              Cũng chính từ sự khác biệt đó, thương hiệu V-Milk Tea đã có những
              bước phát triển thần tốc và dần chiếm lĩnh thị trường trà sữa với
              hơn 200 cửa hàng trải dài trên toàn quốc. Cột mốc năm 2018 đánh
              dấu ước mơ vươn xa biển lớn của thương hiệu khi V-Milk Tea chính
              thức đặt chân lên nước Mỹ và tiếp nối thành công tại Úc, Nhật Bản,
              Hàn Quốc, Singapore,…
            </p>
            <div className="row-md-12 col-md-12 cups-contents">
              <img
                src={image1}
                alt=""
              />
            </div>
            <div className="row-md-12 col-md-12 cups-contents">
              <img
                src={image2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Link className="btn-delivery" to="/product">
        <img
          src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/button_delivery.png"
          alt=""
        />
      </Link>
    </>
  );
}
