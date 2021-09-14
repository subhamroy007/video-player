import classes from "./ControlsComponent.module.css";
import { GoFileDirectory, GoDeviceCameraVideo } from "react-icons/go";
import genericIcon from "../utility/GenericIcon";
import { useRef } from "react";
import FileProcessorComponent from "../utility/FileProcessorComponent";

const ControlsComponent = (props) => {
  const fileSelectorRef = useRef();

  const fileInputChangeHandler = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles.length === 0) console.log("no file selected");
    else {
      props.onFileSelect(selectedFiles[0]);
    }
  };

  const fileIconClickHandler = (event) => {
    fileSelectorRef.current.click();
  };

  const fileIconRef = useRef(
    genericIcon(GoFileDirectory, fileIconClickHandler)
  );
  const recordIconRef = useRef(genericIcon(GoDeviceCameraVideo));

  const FileIcon = fileIconRef.current;
  const RecordIcon = recordIconRef.current;

  return (
    <div className={classes["controls-container"]}>
      <FileIcon />
      <FileProcessorComponent
        ref={fileSelectorRef}
        onChange={fileInputChangeHandler}
      />
      <RecordIcon />
    </div>
  );
};

export default ControlsComponent;
