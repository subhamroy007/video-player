import classes from "./LoadingComponent.module.css";
import ProgressBar from "../progress-bar-component/ProgressBar";
import { useEffect, useState } from "react";
const LoadingComponent = (props) => {
  const [loaded, setLoaded] = useState("0%");

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.onloadstart = (event) => {
      const loadedRate = String((event.loaded * 100) / event.total) + "%";
      setLoaded(loadedRate);
    };

    fileReader.onprogress = (event) => {
      const loadedRate = String((event.loaded * 100) / event.total) + "%";
      setLoaded(loadedRate);
    };

    fileReader.onload = (event) => {
      const loadedRate = String((event.loaded * 100) / event.total) + "%";
      setLoaded(loadedRate);
      console.log("done");
      props.onLoadComplete(fileReader.result);
    };

    fileReader.readAsDataURL(props.targetFile);
  }, []);

  return (
    <div className={classes["loading-container"]}>
      <div className={classes["loading-title"]}>Loading...</div>
      <div className={classes["loading-progressbar-container"]}>
        <ProgressBar
          orientation="H"
          majorAxis="90%"
          minorAxis="4%"
          circularBorder={true}
          fill={[255, 255, 255]}
          loadedData={{ exists: true, majorAxis: loaded }}
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
