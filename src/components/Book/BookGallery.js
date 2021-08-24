import Gallery from "react-photo-gallery";
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import classes from "./BookGallery.module.scss";
function Mygallery(props) {
  const PHOTO_SET = props.galleryItem.map(({ title, width, height }) => {
    return {
      src: "/Images/" + props.folder + "/" + title,
      width: (title == props.coverImage) ? 0 :width,
      height: height,
    };
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className={classes.wrapper}>
      <Gallery
        photos={PHOTO_SET}
        targetRowHeight={220}
        // margin={5}
        direction={"row"}
        //   columns={4}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={PHOTO_SET.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Mygallery;
