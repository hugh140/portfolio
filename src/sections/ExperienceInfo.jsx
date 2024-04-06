import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faNodeJs,
  faPhp,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import ExperienceSection from "../components/ExperienceSection";

function ExperienceInfo() {
  return (
    <section>
      <div className="lg:w-[60%] md:w-[75%] p-5 w-full mx-auto" id="experience">
        <div className="my-20" />
        <h2 className="text-3xl mb-5 font-bold">Experiencia Laboral</h2>
        <div className="ps-5 border-s-2">
          <ExperienceSection
            activity={"Soporte al Usuario"}
            company={"SENESCYT"}
            date={"Enero 2023 - Abril 2023"}
          >
            <ul className="list-disc ms-4 text-lg">
              <li className="mb-1">
                Desarrollo de aplicación web para administrar informes técnicos.
              </li>
              <li className="mb-1">Soporte técnico al usuario.</li>
              <li className="mb-1">
                Mantenimiento preventivo y correctivo de equipos informáticos y
                ofimáticos.
              </li>
              <li className="mb-1">
                Instalación de programas base y configuración de nuevos equipos.
              </li>
            </ul>
            <div className="mb-14 flex gap-2">
              <div className="rounded-xl bg-zinc-900 w-fit p-1">
                <FontAwesomeIcon className="text-blue-600" icon={faReact} />{" "}
                <span className="text-sm">React</span>
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
          </ExperienceSection>

          <ExperienceSection
            activity={"Administración de Páginas de Wordpress"}
            company={"Instituto Sucre"}
            date={"Marzo 2024 - Actual"}
          >
            <ul className="list-disc ms-4 text-lg">
              <li className="mb-1">
                Realización de páginas web atractivas y responsivas en
                Wordpress.
              </li>
              <li className="mb-1">
                Revisión y publicación de páginas ya acabadas.
              </li>
              <li className="mb-1">
                Construcción de plantillas con Elementor.
              </li>
              <li className="mb-1">
                Personalización de temas de Wordpress con CSS.
              </li>
            </ul>
            <div className="flex gap-2">
              <div className="rounded-xl bg-zinc-900 w-fit p-1">
                <FontAwesomeIcon className="text-teal-600" icon={faWordpress} />{" "}
                <span className="text-sm">Wordpress</span>
              </div>
              <div className="rounded-xl bg-zinc-900 w-fit p-1">
                <FontAwesomeIcon className="text-blue-600" icon={faCss3} />{" "}
                <span className="text-sm">CSS</span>
              </div>
              <div className="rounded-xl bg-zinc-900 w-fit p-1">
                <FontAwesomeIcon className="text-violet-600" icon={faPhp} />{" "}
                <span className="text-sm">PHP</span>
              </div>
            </div>
          </ExperienceSection>
        </div>
      </div>
    </section>
  );
}
export default ExperienceInfo;
