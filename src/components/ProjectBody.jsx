import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { useRef, useState, useContext, useEffect } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SelectionContext } from "../sections/ProjectSection";

function ProjectBody({ title, image, children, code, customButton }) {
  const imageRef = useRef();
  const [loading, setLoading] = useState(true);
  const selection = useContext(SelectionContext);

  useEffect(() => setLoading(true), [selection]);

  function handleImageLoad() {
    setLoading(false);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="relative">
        <img
          src={image}
          ref={imageRef}
          onLoad={handleImageLoad}
          className={`object-cover aspect-video md:aspect-square rounded-3xl shadow-xl shadow-transparent 
        hover:shadow-zinc-700 hover:scale-105 duration-200 ${loading && "opacity-10"}`}
          alt=""
        />
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
              <FontAwesomeIcon icon={customButton.icon} /> {customButton.title}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
export default ProjectBody;

ProjectBody.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.array,
  code: PropTypes.string,
  customButton: PropTypes.object,
};
