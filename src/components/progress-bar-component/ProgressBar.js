const ProgressBar = (props) => {
  const {
    orientation,
    majorAxis,
    minorAxis,
    circularBorder,
    loadedData,
    bufferedData,
    fill,
    ...otherProps
  } = props;

  const progressBarStyleSheet = {
    mainContainer: {
      backgroundColor: `rgba(255, 255, 255, 0.4)`,
      width: orientation === "H" ? majorAxis : minorAxis,
      height: orientation === "V" ? majorAxis : minorAxis,
      borderRadius: circularBorder ? "5px" : "0px",
      zIndex: 2,
      position: "relative",
    },

    loadedContainer: {
      backgroundColor: `rgba(${fill[0]}, ${fill[1]}, ${fill[2]}, 1.0)`,
      width: orientation === "H" ? loadedData?.majorAxis : "100%",
      height: orientation === "V" ? loadedData?.majorAxis : "100%",
      borderRadius: circularBorder ? "5px" : "0px",
      zIndex: 3,
      position: "absolute",
      top: orientation === "H" ? "0%" : `calc(100% - ${loadedData?.majorAxis})`,
      left: "0%",
    },

    bufferedContainer: {
      backgroundColor: `rgba(255, 255, 255, 0.7)`,
      width: orientation === "H" ? bufferedData?.majorAxis : "100%",
      height: orientation === "V" ? bufferedData?.majorAxis : "100%",
      borderRadius: circularBorder ? "5px" : "0px",
      zIndex: 4,
      position: "absolute",
      top:
        orientation === "H" ? "0%" : `calc(100% - ${bufferedData?.majorAxis})`,
      left: "0%",
    },
  };

  return (
    <div style={progressBarStyleSheet.mainContainer} {...otherProps}>
      {loadedData?.exists && (
        <div style={progressBarStyleSheet.loadedContainer} />
      )}
      {bufferedData?.exists && (
        <div style={progressBarStyleSheet.bufferedContainer} />
      )}
    </div>
  );
};

export default ProgressBar;
