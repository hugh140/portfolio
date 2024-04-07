import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

function Gallery({ images = [], setOpen, onClose }) {
  const [selected, setSelected] = useState(0);

  function handleSelectImg(index) {
    setSelected(index);
  }

  function moveSelected(num) {
    let calc = (selected + num) % images.length;
    if (calc < 0) calc = images.length - 1;
    setSelected(calc);
  }

  function handleKeyDown(evt) {
    if (evt.key === "ArrowRight") moveSelected(1);
    if (evt.key === "ArrowLeft") moveSelected(-1);
    if (evt.key === "Escape") {
      setSelected(0);
      onClose();
    }
  }

  function closeModal(evt) {
    if (evt.target.id === "closeModal") {
      setSelected(0);
      onClose();
    }
  }

  return createPortal(
    <dialog
      open={setOpen}
      className="fixed top-1/2 -translate-y-1/2 w-screen h-screen backdrop-blur-sm bg-black/40 z-10"
      onKeyDown={handleKeyDown}
      onClick={closeModal}
    >
      <div
        className="flex flex-col justify-evenly pb-40 items-center gap-5 h-full"
        id="closeModal"
      >
        <img src={images[selected]} className="object-cover mx-auto max-h-[100%]" alt="" />
        <div className="flex flex-row gap-3 items-center absolute bottom-7">
          <button
            className="text-white me-5 text-5xl"
            onClick={() => moveSelected(-1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {images.map((point, index) => (
            <button
              key={index}
              className={`bg-white rounded-full duration-100 ${index === selected ? "w-4 h-4" : "w-2 h-2"}`}
              onClick={() => handleSelectImg(index)}
            />
          ))}
          <button
            className="text-white ms-5 text-5xl"
            onClick={() => moveSelected(1)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
export default Gallery;

Gallery.propTypes = {
  images: PropTypes.array,
  setOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
