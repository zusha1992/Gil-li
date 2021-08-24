import classes from "./BookPreview.module.scss";

import { useRef } from "react";

function BookPreview(props) {
  const headerRef = useRef();

  function showTitle() {
    headerRef.current.style.opacity = 1;
  }

  function hideTitle() {
    headerRef.current.style.opacity = 0;
  }
  return (
    <div>
      <div className={classes.grid}
           onMouseOver={showTitle}
           onMouseOut={hideTitle}>
        <div
          className={classes.item}
          style={{ backgroundImage: "url(/Images/" + props.url }}
        ></div>
        <div className={classes.itemCover}></div>

        <div className={classes.header} ref={headerRef}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.author}>{props.author}</div>
        </div>
      </div>
    </div>
  );
}

export default BookPreview;
