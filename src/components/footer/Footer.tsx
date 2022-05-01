import style from "./Footer.module.css";

import { Col, Container, Row } from "react-bootstrap";

import footer_logo from "./Footer_Image/footer_logo-removebg-preview.png";
import Googleplay from "./Footer_Image/Googleplay.png";
import Appstore from "./Footer_Image/Appstore.png";
import Verification from "./Footer_Image/bo_cong_thuong_grande.png";
import {Link} from 'react-router-dom'

import { MdWaterDrop, MdPhoneEnabled, MdEmail } from "react-icons/md";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillGooglePlusCircle,
} from "react-icons/ai";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={`pt-5 ${style.footerOverlay}`}>
        <Container>
          <div className={`pb-3 ${style.footerInfor}`}>
            <Row>
              <Col xs={6} lg={3}>
                <img className="img-fluid" src={footer_logo} alt="" />
              </Col>
              <Col xs={6} lg={5}>
                <h3 className={`mb-5 mt-2 fw-bold ${style.footerTitle}`}>
                  CÔNG TY CP TM &amp; DV V-Milk Tea
                </h3>
                <address
                  className={`lh-base text-light my-2 ${style.configItem}`}
                >
                  <MdWaterDrop
                    className={`me-2 mb-1 fs-6 ${style.contactIcon}`}
                  />
                  Tầng 4 tòa nhà V-Milk Tea, Bắc Từ Liêm, Hà Nội
                </address>
                <span className={`lh-base text-light my-2 ${style.configItem}`}>
                  <MdPhoneEnabled
                    className={`me-2 mb-1 fs-6 ${style.contactIcon}`}
                  />{" "}
                  1968.68.68.68
                </span>
                <p className={`lh-base text-light my-2 ${style.configItem}`}>
                  <MdEmail className={`me-2 mb-1 fs-6 ${style.contactIcon}`} />{" "}
                  info@vmilktea.com
                </p>
                <p className={`lh-base text-light my-2 ${style.configItem}`}>
                  Số ĐKKD: 0436754849. Ngày cấp 05/06/2000
                </p>
                <address
                  className={`lh-base text-light my-2 ${style.configItem}`}
                >
                  Nơi cấp: Sở kế hoạch và Đầu tư Thành phố Hà Nội
                </address>
                <div className="footer_socials">
                  <ul className={`d-flex my-2`}>
                    <li className={`fs-4 rounded ${style.icon_box}`}>
                      <a
                        className={` ${style.socialIcon}`}
                        href="https://www.facebook.com/tocotocobubbletea/"
                        target="_blank"
                      >
                        <AiFillFacebook />
                      </a>
                    </li>
                    <li className={`fs-4 rounded ${style.icon_box}`}>
                      <a
                        className={` ${style.socialIcon}`}
                        href="https://www.instagram.com/tocotoco_bubble_tea/"
                        target="_blank"
                      >
                        <AiOutlineInstagram />
                      </a>
                    </li>
                    <li className={`fs-4 rounded ${style.icon_box}`}>
                      <a
                        className={style.socialIcon}
                        href="https://www.youtube.com/c/ToCoToCoBubbleTea/"
                        target="_blank"
                      >
                        <AiFillYoutube />
                      </a>
                    </li>
                    <li className={`fs-4 rounded ${style.icon_box}`}>
                      <a
                        className={style.socialIcon}
                        href="https://www.tiktok.com/@tocotocobubbletea/"
                        target="_blank"
                      >
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className={`fs-4 rounded ${style.icon_box}`}>
                      <a
                        className={` ${style.socialIcon}`}
                        href="https://zalo.me/2268915497539367639"
                        target="_blank"
                      >
                        <AiFillGooglePlusCircle />
                      </a>
                    </li>
                  </ul>

                  <div className={`my-3 d-flex`}>
                    <div className={`me-3 ${style.QRCode}`}>
                      <a href="#"
                        target="_blank"
                      >
                        <img src={Googleplay} className={`w-100`} />
                      </a>
                    </div>
                    <div className={`${style.QRCode}`}>
                      <a href="#"
                        target="_blank"
                      >
                        <img src={Appstore} className={`w-100`} />
                      </a>
                    </div>
                  </div>
                  <div className={`${style.QRCode}`}>
                    <a href="#"
                      target="_blank"
                    >
                      <img src={Verification} className={`w-100`} />
                    </a>
                  </div>
                </div>
              </Col>

              <Col xs={6} lg={2}>
                <h3 className={`mb-5 mt-2 fw-bold ${style.footerTitle}`}>
                  VỀ CHÚNG TÔI
                </h3>
                <ul>
                  <li className={`lh-base my-2 ${style.configItem}`}>
                    <Link to="/historyAndMission" className={`text-decoration-none text-light`}>
                      Giới thiệu về V-Milk Tea
                    </Link>
                  </li>
                  <li className={`lh-base  my-2 ${style.configItem}`}>
                    <a href="#" className={`text-decoration-none text-light`}>
                      Nhượng quyền
                    </a>
                  </li>
                  <li className={`lh-base my-2 ${style.configItem}`}>
                    <Link to="/Promotional_news" className={`text-decoration-none text-light`}>
                      Tin tức khuyến mại
                    </Link>
                  </li>
                  <li className={`lh-base my-2 ${style.configItem}`}>
                    <a href="#" className={`text-decoration-none text-light`}>
                      Cửa hàng
                    </a>
                  </li>
                  <li className={`lh-base my-2 ${style.configItem}`}>
                    <a href="#" className={`text-decoration-none text-light`}>
                      Quy định chung
                    </a>
                  </li>
                  <li className={`lh-base my-2 ${style.configItem}`}>
                    <a href="#" className={`text-decoration-none text-light`}>
                      TT liên hệ và &tamp; ĐKKD
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} lg={2}>
                <h3 className={`mb-5 mt-2 fw-bold ${style.footerTitle}`}>
                  CHÍNH SÁCH
                </h3>
                <ul>
                  <li className={`lh-base text-light my-2 ${style.configItem}`}>
                    Chính sách thành viên
                  </li>
                  <li className={`lh-base text-light my-2 ${style.configItem}`}>
                    Hình thức thanh toán
                  </li>
                  <li className={`lh-base text-light my-2 ${style.configItem}`}>
                    Vận chuyển giao nhận
                  </li>
                  <li className={`lh-base text-light my-2 ${style.configItem}`}>
                    Đổi trả và hoàn tiền
                  </li>
                  <li className={`lh-base text-light my-2 ${style.configItem}`}>
                    Bảo vệ thông tin cá nhân
                  </li>
                  <li className={`lh-base text-light my-2 ${style.configItem}`}>
                    Bảo trì, bảo hành
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className={`py-4 text-light d-flex justify-content-between flex-lg-row flex-column ${style.copyRight}`}>
            <p className={`fw-bold`}>
              V-Milk Tea - Thương hiệu trà sữa tiên phong sử dụng nguồn nông sản
              Việt Nam
            </p>
            <p>Copyrights © 2019 by V-Milk Tea. All rights reserved.</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
