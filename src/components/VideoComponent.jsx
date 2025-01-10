import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const VideoComponent = ({
  videoUrl,
  controls,
  className,
  autoPlay,
  muted,
  loop,
  isIframe,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const preventPause = () => {
      if (videoElement.paused) {
        videoElement.play();
      }
    };

    videoElement.addEventListener("pause", preventPause);

    return () => {
      videoElement.removeEventListener("pause", preventPause);
    };
  }, []);
  return isIframe ? (
    <iframe
      width="560"
      height="315"
      src={videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  ) : (
    <video
      ref={videoRef}
      src={videoUrl}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      className={className}
    />
  );
  
}

;
VideoComponent.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  className: PropTypes.string,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
};

VideoComponent.defaultProps = {
  videoUrl:
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  controls: true,
  className: "",
  autoPlay: false,
  muted: true,
  loop: false,
};

export default VideoComponent;
