import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function FooterSection() {
  return (
    <footer className="text-center p-5 bg-white/5">
      <div
        className="lg:w-[60%] md:w-[75%] p-5 w-full mx-auto gap-3 flex flex-row justify-center 
            text-center flex-wrap"
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/hugo-reyes-292a88260/"
          className="text-white text-lg rounded-2xl border-transparent w-fit
              p-1 px-3 hover:bg-blue-600 ease-in duration-100 cursor-pointer hover:scale-105"
        >
          <FontAwesomeIcon icon={faLinkedin} className="me-2" /> Linkedin
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
          className="text-white text-lg rounded-2xl border-transparent w-fit
              p-1 px-3 hover:bg-red-600 ease-in duration-100 cursor-pointer hover:scale-105"
        >
          <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Gmail
        </a>
        <a
          target="_blank"
          href="https://github.com/hugh140"
          className="text-white text-lg rounded-2xl border-transparent w-fit
              p-1 px-3 hover:bg-violet-600 ease-in duration-100 cursor-pointer hover:scale-105"
        >
          <FontAwesomeIcon icon={faGithub} className="me-2" /> Github
        </a>
        <a
          target="_blank"
          href="./documents/Hugo Reyes CV.pdf"
          download={true}
          className="text-white text-lg rounded-2xl border-transparent w-fit
              p-1 px-3 hover:bg-red-600 ease-in duration-100 cursor-pointer hover:scale-105"
        >
          <FontAwesomeIcon icon={faFilePdf} className="me-2" /> Currículum
        </a>
      </div>
    </footer>
  );
}
export default FooterSection;
