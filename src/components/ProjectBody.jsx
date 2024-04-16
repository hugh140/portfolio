import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { useRef, useState, useContext, useEffect } from "react";
import { faEye, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SelectionContext } from "../sections/ProjectSection";
import Gallery from "./Gallery";

function ProjectBody({ title, image, children, code, customButton, gallery }) {
  const imageRef = useRef();
  const [loading, setLoading] = useState(true);
  const [openGallery, setOpenGallery] = useState(false);
  const selection = useContext(SelectionContext);

  useEffect(() => setLoading(true), [selection]);

  function handleImageLoad() {
    setLoading(false);
  }

  function handleOpenGallery() {
    setOpenGallery(true);
  }

  function handleCloseGallery() {
    setOpenGallery(false);
  }

  return (
    <>
      <Gallery
        images={gallery}
        setOpen={openGallery}
        onClose={handleCloseGallery}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative w-fit">
          <img
            src={image}
            ref={imageRef}
            onLoad={handleImageLoad}
            loading="lazy"
            className={`object-cover aspect-video md:aspect-square rounded-3xl shadow-xl shadow-transparent 
          hover:shadow-zinc-700 cursor-pointer hover:scale-105 duration-200 ${loading && "opacity-10"}`}
            alt=""
            onClick={handleOpenGallery}
          />
          <div className="absolute top-1 left-1 bg-zinc-700/50 p-3 rounded-full">
            <FontAwesomeIcon icon={faEye} />
          </div>
          {loading && (
            <FontAwesomeIcon
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl"
              icon={faSpinner}
              spin
            />
          )}
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>

          {children}

          {code && (
            <a href={code} target="_blank">
              <button className="p-2 bg-indigo-900 rounded-lg hover:bg-indigo-800 duration-100">
                <FontAwesomeIcon icon={faGithub} /> Código
              </button>
            </a>
          )}
          {customButton?.title && (
            <a href={customButton.url} target="_blank">
              <button className="p-2 bg-sky-900 rounded-lg hover:bg-sky-800 duration-100">
                <FontAwesomeIcon icon={customButton.icon} />{" "}
                {customButton.title}
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
export default ProjectBody;

ProjectBody.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.array,
  code: PropTypes.string,
  customButton: PropTypes.object,
  gallery: PropTypes.array,
};
