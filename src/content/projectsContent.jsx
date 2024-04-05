import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectBody from "../components/ProjectBody";
import {
  faReact,
  faNodeJs,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: "FullStack",
    projects: [
      () => (
        <ProjectBody
          title="Mi Portal de Música"
          image="./assets/project1.webp"
          code="https://github.com/hugh140/my-music-portal"
        >
          <div className="flex my-5 gap-2">
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-blue-600" icon={faReact} />{" "}
              <span className="text-sm">React</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-green-600" icon={faNodeJs} />{" "}
              <span className="text-sm">NodeJS</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-emerald-600" icon={faDatabase} />{" "}
              <span className="text-sm">MongoDB</span>
            </div>
          </div>
          <p className="text-lg mb-5 text-zinc-400">
            La finalidad de este proyecto es el de publicar blogs y páginas
            estáticas, administrarlos, configurar usuarios con sus respectivos
            roles, y recuperar información sobre mi cuenta de artista de Spotify
            para desplegar mi música automáticamente. Este proyecto toma mucho
            de inspiración de Wordpress, pero más reducido y personal.
          </p>
        </ProjectBody>
      ),
      () => (
        <ProjectBody
          title="Cellphora"
          image="./assets/project3.webp"
          code="https://github.com/hugh140/products-catalogue"
        >
          <div className="flex my-5 gap-2">
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-blue-600" icon={faReact} />{" "}
              <span className="text-sm">React</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-violet-600" icon={faBootstrap} />{" "}
              <span className="text-sm">Bootstrap</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-green-600" icon={faNodeJs} />{" "}
              <span className="text-sm">NodeJS</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-red-500" icon={faDatabase} />{" "}
              <span className="text-sm">MySQL</span>
            </div>
          </div>
          <p className="text-lg mb-5 text-zinc-400">
            Cellphora es un E-Shop, donde se pueden agregar productos con su
            descripción, especificación y precio correspondientes. Permite
            comentarlos, pedirlos y guardarlos en la cuenta del usuario. También
            dispone de roles de usuario, como el administrador, quien podrá
            administrar tanto los productos y los usuarios.
          </p>
        </ProjectBody>
      ),
      () => (
        <ProjectBody
          title="SAIT"
          image="./assets/project4.webp"
          code="https://github.com/hugh140/Sistema_Informes"
        >
          <div className="flex my-5 gap-2">
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-blue-600" icon={faReact} />{" "}
              <span className="text-sm">React</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-violet-600" icon={faBootstrap} />{" "}
              <span className="text-sm">Bootstrap</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-green-600" icon={faNodeJs} />{" "}
              <span className="text-sm">NodeJS</span>
            </div>
          </div>
          <p className="text-lg mb-5 text-zinc-400">
            Proyecto realizado para la institución SENESCYT, la cual permite
            añadir informes técnicos al servidor, para ordenarlos mediante
            carpetas, las cuales solo podrán ser creadas por el administrador.
            Este proyecto permitió una mejor organización de los informes al
            tenerlos en un sistema central.
          </p>
        </ProjectBody>
      ),
    ],
  },
  {
    title: "C#",
    projects: [
      () => (
        <ProjectBody
          title="Live Code Music"
          image="./assets/project2.webp"
          code="https://github.com/hugh140/live-code-music"
        >
          <div className="flex my-5 gap-2">
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-blue-600" icon={faReact} />{" "}
              <span className="text-sm">React</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-cyan-600" icon={faCss3} />{" "}
              <span className="text-sm">TailwindCSS</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-yellow-600" icon={faCode} />{" "}
              <span className="text-sm">Javascript</span>
            </div>
          </div>
          <p className="text-lg mb-5 text-zinc-400">
            Aplicación web en desarrollo que intenta imitar las herramientas de
            escritorio para hacer música con código, priorizando la performance
            que esto puede generar en vivo.
          </p>
        </ProjectBody>
      ),
    ],
  },
];
export default sections;
