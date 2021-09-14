import classes from "./StartScreenComponent.module.css";
import ControlsComponent from "../controls-component/ControlsComponent";
import { useState } from "react";
import LoadingComponent from "../loading-component/LoadingComponent";

const StartScreenComponent = (props) => {
  const [mediaFile, setMediaFile] = useState();

  const mediaSelectHandler = (selectedFile) => {
    setMediaFile(selectedFile);
  };

  const loadCompleteHandler = (dataUrl) => {
    console.log("data gaineed");
    props.onReady(dataUrl);
  };

  return (
    <div className={classes["start-screen-container"]}>
      {!mediaFile && <ControlsComponent onFileSelect={mediaSelectHandler} />}
      {mediaFile && (
        <LoadingComponent
          targetFile={mediaFile}
          onLoadComplete={loadCompleteHandler}
        />
      )}
    </div>
  );
};

export default StartScreenComponent;
