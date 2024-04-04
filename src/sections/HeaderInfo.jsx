import HeaderCanvas from "../components/HeaderCanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function HeaderInfo() {
  return (
    <div className="relative">
      <HeaderCanvas />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div
          className="lg:w-[60%] md:w-[75%] p-5 w-full justify-center flex items-center gap-10 container md:flex-row 
          flex-col-reverse mx-auto"
        >
          <div className="cursor-text backdrop-blur-[2px] p-10 border-2 border-[rgba(255,255,255,0.1)] rounded-lg">
            <h1 className="font-noto text-5xl font-extrabold text-white mb-2">
              ¡Hola!
            </h1>
            <h2 className="text-2xl text-zinc-300">
              Soy{" "}
              <span
                className="bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 inline-block 
              text-transparent bg-clip-text font-bold"
              >
                Hugo
              </span>
              , un Desarrollador Web Fullstack.
            </h2>
            <div className="text-xl text-zinc-400 mt-5">
              <span className="text-blue-400">+1 años de experiencia.</span>{" "}
              <span className="text-blue-300">
                Siempre en constante aprendizaje.
              </span>{" "}
              <span className="text-teal-300">De Quito - Ecuador.</span>
            </div>
          </div>
          <img
            src="./assets/portada.webp"
            className="w-64 rounded-full hover:scale-110 duration-500 ease-in-out"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="lg:w-[60%] md:w-[75%] p-5 w-full mx-auto gap-3 flex flex-row justify-center text-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hugo-reyes-292a88260/"
            className="text-white text-2xl rounded-2xl border-transparent w-fit
              p-1 px-3 hover:bg-blue-600 ease-in duration-100 cursor-pointer hover:scale-105"
          >
            <FontAwesomeIcon icon={faLinkedin} className="me-2" /> Linkedin
          </a>
          <a
            target="_blank"
            href="https://github.com/hugh140"
            className="text-white text-2xl rounded-2xl border-transparent w-fit
              p-1 px-3 hover:bg-violet-600 ease-in duration-100 cursor-pointer hover:scale-105"
          >
            <FontAwesomeIcon icon={faGithub} className="me-2" /> Github
          </a>
          <a
            target="_blank"
            href={
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? "mailto:hugofer300@gmail.com"
                : "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hugofer300@gmail.com"
            }
            className="text-white text-2xl rounded-2xl border-transparent w-fit
              p-1 px-3 hover:bg-red-600 ease-in duration-100 cursor-pointer hover:scale-105"
          >
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Gmail
          </a>
        </div>
      </div>
    </div>
  );
}
export default HeaderInfo;
