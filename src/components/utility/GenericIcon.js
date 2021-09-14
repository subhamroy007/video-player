import React, { useRef, useState } from "react";
import classes from "./GenericIcon.module.css";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const genericIcon = (Icon, mouseClickGlobalHandler) => {
  const GenericIcon = (props) => {
    const [transition, setTransition] = useState(false);

    const mouseEnterHandlerRef = useRef((event) => {
      setTransition(true);
    });

    const mouseLeaveHandlerRef = useRef((event) => {
      setTransition(false);
    });

    let containerDivClassList = ["icon-container"];

    if (transition) {
      containerDivClassList = containerDivClassList.concat(
        "transition-container"
      );
    }

    return (
      <div
        onMouseEnter={mouseEnterHandlerRef.current}
        onMouseLeave={mouseLeaveHandlerRef.current}
        onClick={mouseClickGlobalHandler}
        className={containerDivClassList
          .map((elemClass) => classes[elemClass])
          .join(" ")}
      >
        <Icon className={classes["icon"]} {...props} />
      </div>
    );
  };

  GenericIcon.displayName = `GenericIcon(${getDisplayName(Icon)})`;
  return GenericIcon;
};

export default genericIcon;
