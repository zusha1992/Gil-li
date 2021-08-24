import { Link } from "react-router-dom";
import classes from "./Book.module.scss";
import BookGallery from "./BookGallery";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Book(props) {
  return (
    <div className={classes.fullScreen}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <div className={classes.description}>
            <b>{props.title} </b> <br />
            {"written by " +
              props.author +
              ", " +
              props.year +
              ". " +
              props.technique}
          </div>
          <div
            className={classes.coverPicture}
            style={{
              backgroundImage:
                "url(/Images/" + props.folder + "/" + props.coverImage,
            }}
          ></div>
        </div>
        <BookGallery folder={props.folder} galleryItem={props.galleryItem} coverImage={props.coverImage} />
      </div>
      <Link to={"/gallery/" + props.nextUrl}>
        <div className={`${classes.arrow} ${classes.rightArrow}`}>
          <AiOutlineRight />
        </div>
      </Link>
      <Link to={"/gallery/" + props.prevUrl}>
        <div className={`${classes.arrow} ${classes.leftArrow}`}>
          <AiOutlineLeft />
        </div>
      </Link>
    </div>
  );
}

export default Book;
