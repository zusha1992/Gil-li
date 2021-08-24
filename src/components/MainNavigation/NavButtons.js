import classes from "./NavButtons.module.scss";
import { useRef } from "react";

function NavButtons(props) {
  const underlineRef = useRef();

  function drawUnderline() {
    underlineRef.current.style.width = "100%";
    underlineRef.current.style.left = "0%";

  }

  function removeUnderline() {
    underlineRef.current.style.width = "0%";
    underlineRef.current.style.left = "50%";

  }
  return (
    <div
      className={classes.buttonImage}
      onMouseOver={drawUnderline}
      onMouseOut={removeUnderline}
      style={{backgroundImage:"url(" + props.url + ")"}}
    >
      <div className={classes.underline} ref={underlineRef}></div>
    </div>
  );
}

export default NavButtons;
