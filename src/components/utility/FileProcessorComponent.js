import React from "react";
import classes from "./FileProcessorComponent.module.css";

const FileProcessorComponent = React.forwardRef((props, ref) => {
  return (
    <div className={classes["file-selector-container"]}>
      <input
        type="file"
        name="file-selector"
        id="file-selector"
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default FileProcessorComponent;
