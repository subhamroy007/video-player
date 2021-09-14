import classes from "./VideoControlsComponent.module.css";
import ProgressBar from "../progress-bar-component/ProgressBar";
import IconWrapper from "../utility/IconWrapper";
import {
  FaPlay,
  FaRedo,
  FaUndo,
  FaPause,
  FaVolumeDown,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

import { MdSettings } from "react-icons/md";

const VideoControlsComponent = (props) => {
  const {
    timeRemaining,
    progressBarLength,
    isPlaying,
    onPlayClick,
    onPauseClick,
    onBackwardClick,
    onForwardClick,
    onVolumeBarClick,
    onVolumeClick,
    volume,
    isMuted,
    ...restProps
  } = props;

  const currentVolume = isMuted ? "0%" : String(+volume * 100) + "%";

  return (
    <div className={classes["controls-container"]}>
      <div className={classes["progress-tracker-container"]}>
        <ProgressBar
          orientation="H"
          majorAxis="87%"
          minorAxis="15%"
          fill={[0, 0, 255]}
          circularBorder={true}
          loadedData={{
            exists: true,
            majorAxis: String(progressBarLength) + "%",
          }}
        />
        <div className={classes["duration-container"]}>{timeRemaining}</div>
      </div>
      <div className={classes["control-button-container"]}>
        <IconWrapper style={{ width: "30%" }}>
          <IconWrapper style={{ width: "30%", height: "90%" }}>
            {+volume > 0.5 && !isMuted && (
              <FaVolumeUp
                className={classes["icon"]}
                style={{
                  width: "100%",
                  height: "100%",
                  stroke: "white",
                  fill: "white",
                }}
                onClick={onVolumeClick}
              />
            )}
            {+volume < 0.5 && +volume > 0 && !isMuted && (
              <FaVolumeDown
                className={classes["icon"]}
                style={{
                  width: "100%",
                  height: "100%",
                  stroke: "white",
                  fill: "white",
                }}
                onClick={onVolumeClick}
              />
            )}
            {+volume <= 0 ||
              (isMuted && (
                <FaVolumeMute
                  className={classes["icon"]}
                  style={{
                    width: "100%",
                    height: "100%",
                    stroke: "white",
                    fill: "white",
                  }}
                  onClick={onVolumeClick}
                />
              ))}
          </IconWrapper>
          <IconWrapper style={{ width: "70%", height: "90%" }}>
            <ProgressBar
              orientation="H"
              majorAxis="90%"
              minorAxis="15%"
              fill={[0, 0, 255]}
              circularBorder={true}
              loadedData={{
                exists: true,
                majorAxis: currentVolume,
              }}
            />
          </IconWrapper>
        </IconWrapper>
        <IconWrapper style={{ width: "30%" }}>
          <IconWrapper style={{ width: "30%", height: "90%" }}>
            <FaUndo
              className={classes["icon"]}
              style={{
                width: "100%",
                height: "100%",
                stroke: "white",
                fill: "white",
              }}
              onClick={onBackwardClick}
            />
          </IconWrapper>
          <IconWrapper style={{ width: "30%", height: "90%" }}>
            {isPlaying && (
              <FaPause
                className={classes["icon"]}
                style={{
                  width: "100%",
                  height: "100%",
                  stroke: "white",
                  fill: "white",
                }}
                onClick={onPauseClick}
              />
            )}
            {!isPlaying && (
              <FaPlay
                className={classes["icon"]}
                style={{
                  width: "100%",
                  height: "100%",
                  stroke: "white",
                  fill: "white",
                }}
                onClick={onPlayClick}
              />
            )}
          </IconWrapper>
          <IconWrapper style={{ width: "30%", height: "90%" }}>
            <FaRedo
              className={classes["icon"]}
              style={{
                width: "100%",
                height: "100%",
                stroke: "white",
                fill: "white",
              }}
              onClick={onForwardClick}
            />
          </IconWrapper>
        </IconWrapper>
        <IconWrapper style={{ width: "30%" }}>
          <IconWrapper style={{ width: "30%", height: "90%" }}>
            <MdSettings
              className={classes["icon"]}
              style={{
                width: "100%",
                height: "100%",
                stroke: "white",
                fill: "white",
              }}
            />
          </IconWrapper>
        </IconWrapper>
      </div>
    </div>
  );
};

export default VideoControlsComponent;
