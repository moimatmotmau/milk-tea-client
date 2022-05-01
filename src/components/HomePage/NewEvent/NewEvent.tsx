import { Link } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import styles from './NewEvent.module.css';
import lineImg from './home_line.png';
import noelImg from './CHOCO_noel.png';
import VideoYoutube from './VideoYoutube/VideoYoutube';

const NewEvent = () => {
    return (
        <div className={styles.new_event}>
            <Container>
                <Row>
                    <div className={styles.event_text_wrap}>
                        <h3 className={styles.event_sub_title}>Tin Tức và Khuyến Mãi</h3>
                        <h2 className={styles.event_title}>khám phá V-Milk Tea nhận ngay khuyến mãi</h2>
                        <div className={styles.line_img_wrap}>
                            <img src={lineImg} alt="line-img" />
                        </div>
                    </div>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col md={6}>
                        <Row>
                            <Col md={12} className={styles.event_col}>
                                <Link to="/Promotional_news" className={styles.event_link}>
                                    <Card>
                                        <div className={styles.event_img_wrap}>
                                            <Card.Img variant="top" src={noelImg} className={styles.event_img_card} />
                                        </div>
                                        <Card.Body className={styles.event_card_body}>
                                            <Card.Title className={styles.event_card_title}>Cùng V-Milk Tea nhân đôi sự ngọt ngào mùa lễ hội</Card.Title>
                                            <Card.Text className={styles.event_card_text}>
                                                Theo suckhoedoisong.vn - Nhấn nhá chút vị đậm đà từ socola và hồng trà kết hợp hương thơm
                                                beo béo của macchiato kem cà phê thêm chút topping hạt ngũ […]
                                            </Card.Text>
                                            <button className={styles.event_card_btn}>xem thêm</button>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs={6} className={styles.event_col}>
                                <Link to="/Promotional_news" className={styles.event_link}>
                                    <Card>
                                        <div className={styles.event_img_wrap}>
                                            <Card.Img variant="top" src={noelImg} className={styles.event_img_card} />
                                        </div>
                                        <Card.Body className={styles.event_card_body}>
                                            <Card.Title className={styles.event_card_title}>
                                                Tâm huyết nâng tầm giá trị nông sản Việt của V-Milk Tea
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs={6} className={styles.event_col}>
                                <Link to="/Promotional_news" className={styles.event_link}>
                                    <Card>
                                        <div className={styles.event_img_wrap}>
                                            <Card.Img variant="top" src={noelImg} className={styles.event_img_card} />
                                        </div>
                                        <Card.Body className={styles.event_card_body}>
                                            <Card.Title className={styles.event_card_title}>
                                                VỊ GIÒN TAN - GIÁNG SINH RỘN RÀNG CÙNG CHOCO NGŨ CỐC KEM CAFÉ VÀ HỒNG TRÀ NGŨ CỐC KEM CAFÉ
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            {/* <Col xs={6} className={styles.event_col}>
                                <Link to="/Promotional_news" className={styles.event_link}>
                                    <Card>
                                        <div className={styles.event_img_wrap}>
                                            <Card.Img variant="top" src={usaImg} className={styles.event_img_card} />
                                        </div>
                                        <Card.Body className={styles.event_card_body}>
                                            <Card.Title className={styles.event_card_title}>
                                                Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của V-Milk Tea?
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col> */}
                            {/* <Col xs={6} className={styles.event_col}>
                                <Link to="/Promotional_news" className={styles.event_link}>
                                    <Card>
                                        <div className={styles.event_img_wrap}>
                                            <Card.Img variant="top" src={year} className={styles.event_img_card} />
                                        </div>
                                        <Card.Body className={styles.event_card_body}>
                                            <Card.Title className={styles.event_card_title}>
                                                Hành trình 8 năm chinh phục khách hàng của V-Milk Tea
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col> */}
                        </Row>
                    </Col>
                    <Col md={6}>
                        <VideoYoutube />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewEvent