import { useEffect, useRef, useState } from "react";
import classes from "./VideoComponent.module.css";
import VideoControlsComponent from "./VideoControlsComponent";

const toVideoTimeFormat = (duration) => {
  const totalSeconds = Math.floor(duration);

  const timeInMinutes = Math.floor(totalSeconds / 60);
  const timeInSeconds = totalSeconds - timeInMinutes * 60;

  const formatedMinutes =
    timeInMinutes < 10 ? "0" + timeInMinutes : String(timeInMinutes);
  const formatedSeconds =
    timeInSeconds < 10 ? "0" + timeInSeconds : String(timeInSeconds);

  return formatedMinutes + ":" + formatedSeconds;
};

const VideoComponent = (props) => {
  const videoPlayerRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState("00:00");
  const [progressBarLength, setProgressBarLength] = useState(0);
  const [isPlaying, setPlaying] = useState(true);
  const [volume, setVolume] = useState("1.0");
  const [isMuted, setMuted] = useState(true);

  useEffect(() => {
    videoPlayerRef.current.volume = +volume;
    videoPlayerRef.current.muted = isMuted;
    videoPlayerRef.current.autoplay = isPlaying;
  }, []);

  const videoPlayerDefaultSettings = useRef({
    controlsList: "nodownload nofullscreen noremoteplayback",
    crossOrigin: "use-credentials",
    preload: "metadata",
  });

  const metadetaLoadHandler = () => {
    setTimeRemaining(toVideoTimeFormat(videoPlayerRef.current.duration));
  };

  const timeUpdateHandler = () => {
    const remaining =
      videoPlayerRef.current.duration - videoPlayerRef.current.currentTime;
    const length =
      (videoPlayerRef.current.currentTime * 100) /
      videoPlayerRef.current.duration;
    setTimeRemaining(toVideoTimeFormat(remaining));
    setProgressBarLength(length);
  };

  const playButtonClickedHandler = () => {
    videoPlayerRef.current.play();
  };

  const pauseButtonClickedHandler = () => {
    videoPlayerRef.current.pause();
  };

  const pauseEventHandler = () => {
    setPlaying(false);
  };

  const playEventHandler = () => {
    setPlaying(true);
  };

  const undoButtonClickHandler = () => {
    videoPlayerRef.current.currentTime = Math.max(
      0,
      videoPlayerRef.current.currentTime - 10
    );
  };

  const redoButtonClickHandler = () => {
    videoPlayerRef.current.currentTime = Math.min(
      videoPlayerRef.current.duration,
      videoPlayerRef.current.currentTime + 10
    );
  };

  const volumeBarClickHandler = (newVolume) => {
    videoPlayerRef.current.volume = newVolume;
  };

  const volumeChangeHandler = () => {
    setVolume(String(videoPlayerRef.current.volume));
  };

  const volumeButtonClickHandler = () => {
    videoPlayerRef.current.muted = !videoPlayerRef.current.muted;
    setMuted(videoPlayerRef.current.muted);
  };

  return (
    <div className={classes["video-player-container"]}>
      <video
        ref={videoPlayerRef}
        src={props.srcUrl}
        {...videoPlayerDefaultSettings}
        disablePictureInPicture
        disableRemotePlayback
        className={classes["video-element"]}
        onLoadedMetadata={metadetaLoadHandler}
        onTimeUpdate={timeUpdateHandler}
        onPause={pauseEventHandler}
        onPlay={playEventHandler}
        onVolumeChange={volumeChangeHandler}
      ></video>
      <VideoControlsComponent
        timeRemaining={timeRemaining}
        progressBarLength={progressBarLength}
        onPlayClick={playButtonClickedHandler}
        onPauseClick={pauseButtonClickedHandler}
        onBackwardClick={undoButtonClickHandler}
        onForwardClick={redoButtonClickHandler}
        onVolumeBarClick={volumeBarClickHandler}
        onVolumeClick={volumeButtonClickHandler}
        isPlaying={isPlaying}
        volume={volume}
        isMuted={isMuted}
      />
    </div>
  );
};

export default VideoComponent;
