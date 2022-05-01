import { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { Col } from 'react-bootstrap';
import styles from './VideoYoutube.module.css';
import founderImg from './founder.png';
import subImg1 from './slideshow1_2.png';
import subImg2 from './slideshow1_3.png';
import PlayVideo from './PlayVideo/PlayVideo'

const VideoYoutube = () => {
    const [videoId, setVideoId] = useState<string>('');
    const [showVideo, setShowVideo] = useState<boolean>(false);

    const handleClick = (id: string) => {
        setShowVideo(true);
        setVideoId(id)
    }

    return (
        <>
            <div className={styles.founder_video}>
                <img src={founderImg} alt="founder" className={styles.video_img} />
                <p className={styles.founder_description}>
                    Cùng V-Milk Tea lắng nghe đoạn nhạc yêu đời về nhưng ly trà sữa siêu cute này nha!!!
                </p>
                <span className={styles.play_icon} onClick={() => handleClick('BHb1VRju0RE')}>
                    <BsPlayCircle />
                </span>
            </div>
            <div className={styles.sub_video}>
                <Col md={4} xs={6}>
                    <div className={styles.img_wrap}>
                        <img src={subImg1} alt="sub img" className={styles.video_img} />
                        <span className={styles.sub_play_icon} onClick={() => handleClick('8eHi2B2tQBs')}>
                            <BsPlayCircle />
                        </span>
                    </div>
                </Col>
                <Col md={8} xs={6}>
                    <p className={styles.sub_video_description}>
                    Cùng khám phá cha đẻ của V-Milk Tea là ai nhé!!!
                    </p>
                </Col>
            </div>
            <div className={styles.sub_video}>
                <Col md={4} xs={6}>
                    <div className={styles.img_wrap}>
                        <img src={subImg2} alt="sub img" className={styles.video_img} />
                        <span className={styles.sub_play_icon} onClick={() => handleClick('-uFQzcY7YHc')}>
                            <BsPlayCircle />
                        </span>
                    </div>
                </Col>
                <Col md={8} xs={6}>
                    <p className={styles.sub_video_description}>
                        Chân thành các bạn đã đồng hành cùng V-Milk Tea trong suốt quãng thời gian vừa qua!!!
                    </p>
                </Col>
            </div>
            {showVideo && <PlayVideo id={videoId} setShow={setShowVideo} />}
        </>
    )
}

export default VideoYoutube