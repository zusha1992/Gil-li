import classes from "./BookCoverGallery.module.scss";
import BookPreview from "./BookPreview";

import { Link } from "react-router-dom";

const galleryData = require("../../data/galleryData.json").data;

function BookCoverGallery() {
  return (
    <div className={classes.wrapper}>
      {galleryData.map(({ folder, coverImage, title, author }) => {
        const url = folder + "/" + coverImage
        return (
          <Link to={"/gallery/" + title}>
            <BookPreview url={url} title={title} author={author} />
          </Link>
        );
      })}
    </div>
  );
}

export default BookCoverGallery;
