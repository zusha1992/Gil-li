import classes from "./MainNavigation.module.scss";

import { Link } from "react-router-dom";

import NavButtons from "./NavButtons";

function MainNavigation() {
  return (
    <div className={classes.navbar}>
      <Link to="/" className={classes.link}>
        <div className={classes.logo} style={{backgroundImage:"url(/Images/logo.jpg)"}}></div>
      </Link>
      <div className={classes.buttons}>
        <Link to="/gallery" className={classes.link}>
          <NavButtons url="/Images/NavBar/GalleryBtn.png" />
        </Link>
        <div className={classes.dot}></div>
        <Link to="/about" className={classes.link}>
          <NavButtons url="/Images/NavBar/AboutBtn.png" />
        </Link>
        <div className={classes.dot}></div>
        <Link to="/contact" className={classes.link}>
          <NavButtons url="/Images/NavBar/ContactBtn.png" />
        </Link>
      </div>
    </div>
  );
}

export default MainNavigation;
