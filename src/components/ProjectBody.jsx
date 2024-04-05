import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

function ProjectBody({ title, image, children, code }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <img
        src={image}
        className="object-cover aspect-video md:aspect-square rounded-3xl shadow-xl shadow-transparent 
        hover:shadow-zinc-700 hover:scale-105 duration-200"
        alt=""
      />
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>

        {children}

        <a href={code} target="_blank">
          <button className="p-2 bg-indigo-900 rounded-lg hover:bg-indigo-800 duration-100">
            <FontAwesomeIcon icon={faGithub} /> Código
          </button>
        </a>
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
};
