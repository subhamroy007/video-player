import classes from "./IconWrapper.module.css";

const IconWrapper = (props) => {
  const { style, ...restProps } = props;

  return (
    <div style={style} className={classes["wrapper"]} {...restProps}>
      {props.children}
    </div>
  );
};

export default IconWrapper;
