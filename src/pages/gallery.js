import { Switch, Route } from "react-router";
import BookCoverGallery from "../components/Gallery/BookCoverGallery";
import Book from "../components/Book/Book";

const galleryData = require("../data/galleryData.json").data;

function mod(n, m) {
  return ((n % m) + m) % m;
}

function Gallery() {
  return (
    <div>
      <Switch>
        <Route path={"/gallery"} exact>
          <BookCoverGallery />
        </Route>
        {galleryData.map(({ title, imagesCount, folder, technique, author, year, description, galleryItem, coverImage }, index) => {
          return (
            <Route path={"/gallery/" + title}>
              <Book
                title={title}
                nextUrl={galleryData[mod(index + 1, galleryData.length)].title}
                prevUrl={galleryData[mod(index - 1, galleryData.length)].title}
                folder={folder}
                imagesCount={imagesCount}
                description={description}
                year={year}
                author={author}
                technique={technique}
                galleryItem={galleryItem}
                coverImage={coverImage}
              />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default Gallery;
