import React from "react";
import styles from "./PlayVideo.module.css";
import YouTube, { Options } from "react-youtube";
import { IoMdClose } from "react-icons/io";

const PlayVideo: React.FC<{ id: string; setShow: Function }> = ({
  id,
  setShow,
}) => {
  const opts: Options = {
    playerVars: {
      autoplay: 1,
    },
  };

  function VideoOnReady(event: any) {
    event.target.pauseVideo();
  }

  return (
    <div className={styles.play_box}>
      <div className={styles.video_wrap}>
        <span className={styles.close_icon} onClick={() => setShow(false)}>
          <IoMdClose />
        </span>
        <YouTube
          videoId={id}
          opts={opts}
          onReady={VideoOnReady}
          className={styles.video_box}
        />
      </div>
    </div>
  );
};

export default PlayVideo;
