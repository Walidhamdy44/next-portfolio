const VideoSec = () => {
  return (
    <div className="hero-container md:pt-[50px]">
      <video
        className="video-background"
        autoPlay
        muted
        playsInline={true}
        loop={true}
        preload="auto"
        style={{ pointerEvents: "none" }}
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSec;
