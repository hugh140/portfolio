import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectBody from "../components/ProjectBody";
import {
  faReact,
  faNodeJs,
  faBootstrap,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="flex flex-wrap my-5 gap-2">
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
          <div className="flex flex-wrap my-5 gap-2">
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
          <div className="flex flex-wrap my-5 gap-2">
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
          image="./assets/project5.webp"
          customButton={{
            title: "Descargar",
            url: "https://hug-h.itch.io/music-sequencer",
            icon: faDownload,
          }}
        >
          <div className="flex flex-wrap my-5 gap-2">
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-violet-600" icon={faCode} />{" "}
              <span className="text-sm">C#</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-white-600" icon={faUnity} />{" "}
              <span className="text-sm">Unity</span>
            </div>
          </div>
          <p className="text-lg mb-5 text-zinc-400">
            El primer proyecto donde intenté unir la programación con la música,
            haciendo un secuenciador de ritmos para Android bastante funcional y
            divertido. Tiene 4 instrumentos y se puede cambiar el tempo del
            ritmo.
          </p>
        </ProjectBody>
      ),
      () => (
        <ProjectBody
          title="VS Game"
          image="./assets/project7.webp"
          customButton={{
            title: "Descargar",
            url: "https://hug-h.itch.io/vs-game",
            icon: faDownload,
          }}
        >
          <div className="flex flex-wrap my-5 gap-2">
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-violet-600" icon={faCode} />{" "}
              <span className="text-sm">C#</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-white-600" icon={faUnity} />{" "}
              <span className="text-sm">Unity</span>
            </div>
          </div>
          <p className="text-lg mb-5 text-zinc-400">
            Para una exposición y poder jugar mi propio juego con mis amigos,
            programé esto. El juego tiene lugares de protección, powerups,
            música que se adapta según al contexto del juego, etc.
          </p>
        </ProjectBody>
      ),
      () => (
        <ProjectBody
          title="Pong"
          image="./assets/project6.webp"
          customButton={{
            title: "Descargar",
            url: "https://hug-h.itch.io/pong-copia",
            icon: faDownload,
          }}
        >
          <div className="flex flex-wrap my-5 gap-2">
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-violet-600" icon={faCode} />{" "}
              <span className="text-sm">C#</span>
            </div>
            <div className="rounded-xl bg-zinc-900 w-fit p-1">
              <FontAwesomeIcon className="text-white-600" icon={faUnity} />{" "}
              <span className="text-sm">Unity</span>
            </div>
          </div>
          <p className="text-lg mb-5 text-zinc-400">
            Pequeño juego que copia al clásico Pong. Lo hice para practicar mi
            lógica de programación, donde lo retador en su tiempo fue programar
            la dirección de la pelota según de que lado la golpee la barra.
          </p>
        </ProjectBody>
      ),
    ],
  },
  // {
  //   title: "Demás Proyectos",
  //   projects: [
  //     () => (
  //       <ProjectBody
  //         title="Live Code Music"
  //         image="./assets/project2.webp"
  //         code="https://github.com/hugh140/live-code-music"
  //       >
  //         <div className="flex my-5 gap-2">
  //           <div className="rounded-xl bg-zinc-900 w-fit p-1">
  //             <FontAwesomeIcon className="text-blue-600" icon={faReact} />{" "}
  //             <span className="text-sm">React</span>
  //           </div>
  //           <div className="rounded-xl bg-zinc-900 w-fit p-1">
  //             <FontAwesomeIcon className="text-cyan-600" icon={faCss3} />{" "}
  //             <span className="text-sm">TailwindCSS</span>
  //           </div>
  //           <div className="rounded-xl bg-zinc-900 w-fit p-1">
  //             <FontAwesomeIcon className="text-yellow-600" icon={faCode} />{" "}
  //             <span className="text-sm">Javascript</span>
  //           </div>
  //         </div>
  //         <p className="text-lg mb-5 text-zinc-400">
  //           Aplicación web en desarrollo que intenta imitar las herramientas de
  //           escritorio para hacer música con código, priorizando la performance
  //           que esto puede generar en vivo.
  //         </p>
  //       </ProjectBody>
  //     ),
  //   ],
  // },
];
export default sections;
