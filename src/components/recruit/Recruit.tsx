import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecruitCarousel from "./recruitCarousel/RecruitCarousel";
import "./fonts/vietnameseFonts/MijasUltra.otf";
import imgiconbanner from "./img/imgiconbanner.png";
import titleImg from "./img/home_line.png";
import aboutImg1 from "./img/slideshow1_1.png";
import aboutImg2 from "./img/slideshow1_3.png";
import aboutImg3 from "./img/about_img3.jpg";
import ScrollToTop from "react-scroll-to-top";
import style from "./Recruit.module.css";
// import icons
import { IoBriefcase } from "react-icons/io5";
import { FaGraduationCap, FaMoneyBillAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const Recruit = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className={style.containerr}>
      <ScrollToTop smooth top={500} color={`#D3B673`} />
      <RecruitCarousel idH3={style['titleH3']} />
      <Container id={style['titleH3']} className={style.recruitPosition}>
        <p className={style.mainColor}>Vị trí tuyển dụng</p>
        <h3>Các vị trí hiện tại</h3>
        <img src={titleImg} alt="title image" />
        <div className={style.recruitText}>
          Chúng tôi luôn tìm kiếm những người tuyệt vời! Nếu bạn chưa tìm thấy
          cơ hội phù hợp hiện tại, nhưng tin rằng bạn có thể trở thành 1 phần
          của V-Milk Tea, hãy gửi thông tin cho chúng tôi.
        </div>
      </Container>
      <div className={style.introduce}>
        <div className={style.bgCover}></div>
        <Container className={style.content}>
          <div className={style.contentImg}>
            <img src={imgiconbanner} alt="image icon banner" />
          </div>
          <p>
            V-Milk Tea với tâm huyết lấy nông sản Việt Nam làm nguồn nguyên liệu
            chính, dùng nông sản Việt tạo ra những ly đồ uống mang đậm hương vị
            quê hương, an toàn và giàu giá trị dinh dưỡng. Việc ưu tiên sử dụng
            nguồn nông sản trong nước trong pha chế góp phần đẩy mạnh tiêu thụ,
            gắn với cuộc vận động “Người Việt Nam ưu tiên dùng hàng Việt Nam”
            vừa thúc đẩy niềm tự hào dân tộc đồng thời giải quyết vấn đề đầu ra
            của nông sản Việt là giá trị cốt lõi của V-Milk Tea cả hiện tại và
            tương lai”
          </p>
        </Container>
      </div>
      <div className={style.aboutUs}>
        <Container>
          <Row className={style.rowAboutUs}>
            <Col className={style.colText}>
              <h3 className={style.fontMiJasUltra}>LỊCH SỬ PHÁT TRIỂN</h3>
              <p>
                Trở về những ngày đầu tiên khi V-Milk Tea là một cửa hàng nhỏ
                nhưng luôn tấp nập phục vụ khách hàng những sản phẩm được làm từ
                nguồn nguyên liệu sạch và chất lượng hàng đầu. Tháng 11/2013,
                thương hiệu trà sữa V-Milk Tea chính thức được thành lập bởi công
                ty cổ phần thương mại dịch vụ Taco Việt Nam. Tính đến thời điểm
                hiện tại, V-Milk Tea hiện có khoảng 150 cửa hàng phủ sóng trên
                toàn quốc và là tên tuổi được người tiêu dùng yêu mến và tin cậy
                hàng đầu tại thị trường Việt Nam.
              </p>
            </Col>
            <Col className={style.colImg}>
              <img src={aboutImg1} alt="about image 1" />
            </Col>
          </Row>
          <Row className={style.rowAboutUs}>
            <Col className={style.colImg}>
              <img src={aboutImg2} alt="about image 2" />
            </Col>
            <Col className={style.colText}>
              <h3 className={style.fontMiJasUltra}>
                KHÁC BIỆT ĐẾN TỪ NHỮNG ĐIỀU ĐƠN GIẢN NHẤT
              </h3>
              <p>
                Ngay từ đầu, V-Milk Tea đã định hình và lựa chọn con đường đi khác
                biệt. Đó là không chỉ đem đến những ly đồ uống chất lượng hảo
                hàng mà còn đem lại cho khách hàng những trải nghiệm, xúc cảm
                tuyệt vời nhất. Các cửa hàng của chúng tôi đã trở thành địa điểm
                dành cho những người yêu thích trà, đặc biệt là trà sữa trên
                khắp Việt Nam. Tại sao họ chỉ muốn thưởng thức trà sữa V-Milk Tea?
                Vì họ biết họ có thể tin tưởng vào "dịch vụ chân thật, một không
                gian hấp dẫn và một ly trà sữa tuyệt hảo" được pha chế một cách
                chuyên nghiệp.
              </p>
            </Col>
          </Row>
          <Row className={style.rowAboutUs}>
            <Col className={style.colText}>
              <h3 className={style.fontMiJasUltra}>
              V-Milk Tea – NHIỀU HƠN CẢ MỘT LY ĐỒ UỐNG
              </h3>
              <p>
                Với một ly đồ uống V-Milk Tea, chúng tôi thật sự kỳ vọng sẽ truyền
                cảm hứng và nuôi dưỡng tâm hồn con người – những người bạn,
                những ly trà sữa ngọt ngào và những phút giây thư giãn quý giá.
                Mọi người đến V-Milk Tea để trò chuyện, họp mặt hoặc làm việc.
                Chúng tôi là địa điểm tụ họp cho tình bạn, tình yêu, tình đồng
                nghiệp, những mối quan hệ đã trở thành một phần trong cuộc sống
                hàng ngày – và đây chính là những điều nhỏ xinh khiến chúng tôi
                không thể hạnh phúc hơn.
              </p>
            </Col>
            <Col className={style.colImg}>
              <img src={aboutImg3} alt="about image 3" />
            </Col>
          </Row>
        </Container>

      </div>
      <Container className={style.items}>
        <Row className={style.rowItem}>
          <Col className={style.colItem}>
            <a href="#">
              <IoBriefcase className={style.colItemIcon} />
            </a>
            <span>
              CHÍNH SÁCH TUYỂN DỤNG CHUYÊN NGHIỆP, MINH BẠCH, CÔNG BẰNG
            </span>
          </Col>
          <Col className={style.colItem}>
            <a href="#">
              <FaGraduationCap className={style.colItemIcon} />
            </a>
            <span>
              TRUNG TÂM ĐÀO TẠO VỚI NHIỀU CHƯƠNG TRÌNH ĐÀO TẠO CHỨC DANH, ĐÀO
              TẠO NGUỒN
            </span>
          </Col>
          <Col className={style.colItem}>
            <a href="#">
              <GiTrophyCup className={style.colItemIcon} />
            </a>
            <span>
              CƠ HỘI THĂNG TIẾN RỘNG MỞ VỚI PHƯƠNG CHÂM: PHÁT TRIỂN NGUỒN LỰC
              NỘI BỘ LÀ TRỌNG TÂM
            </span>
          </Col>
          <Col className={style.colItem}>
            <a href="#">
              <FaMoneyBillAlt className={style.colItemIcon} />
            </a>
            <span>
              CHẾ ĐỘ ĐÃI NGỘ, THƯỞNG HẤP DẪN, CẠNH TRANH, XỨNG ĐÁNG VỚI NĂNG LỰC
              VÀ ĐÓNG GÓP
            </span>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default Recruit;
