import { faStar, faTools, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
  return (
    <div
      className="fixed top-1/2 right-0 text-3xl -translate-x-1/2 -translate-y-1/2 flex 
        text-center flex-col gap-2 bg-zinc-600/40 backdrop-blur p-2 rounded-xl invisible md:visible"
    >
      <a
        href="#experience"
        className="hover:scale-110 duration-200 hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faStar} />
      </a>
      <a
        href="#projects"
        className="hover:scale-110 duration-200 hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faTools} />
      </a>
      <a
        href="#aboutMe"
        className="hover:scale-110 duration-200 hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
}
export default Menu;
