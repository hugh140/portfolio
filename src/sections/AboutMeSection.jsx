import { useRef } from "react";
import useIsVisible from "../hooks/useIsVisible";

function AboutMeSection() {
  const textRef = useRef();
  const isAnimatedText = useRef();
  const isVisibleText = useIsVisible(textRef);

  function isAnimatingText() {
    if (isAnimatedText.current) return "opacity-1";

    if (isVisibleText) {
      isAnimatedText.current = true;
      return "animate-fade-in-right duration-50 opacity-1";
    } else return "opacity-0";
  }

  const imgRef = useRef();
  const isAnimatedImg = useRef();
  const isVisibleImg = useIsVisible(textRef);

  function isAnimatingImg() {
    if (isAnimatedImg.current) return "opacity-1";

    if (isVisibleImg) {
      isAnimatedImg.current = true;
      return "animate-fade-in-left duration-50 opacity-1";
    } else return "opacity-0";
  }

  return (
    <div className="lg:w-[60%] md:w-[75%] p-5 w-full mx-auto">
      <div className="my-20" />
      <h2 className="text-3xl mb-5 font-bold">Sobre Mi</h2>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-10">
        <p className={`text-lg mb-5 w-full ${isAnimatingText()}`} ref={textRef}>
          Empecé editando mundos en el World of Warcraft 3 a mis 7 años, y
          terminé amando la programación. Una de mis razones siempre fueron los
          videojuegos, pero al darme cuenta que puedo hacer lo que sea, le tuve
          un amor inminente.
          <br />
          <br />
          También soy músico, y siempre me interesó el tema de unir la
          programación con este hobbie, sea como performance o como medio
          audiovisual.
          <br />
          <br />
          Sigo en constante aprendizaje, trabajando en mis proyectos para
          reforzar mis habilidades, aprender es lo que más me gusta por el amor
          que le tengo a descubrir cosas y nichos nuevos.
        </p>
        <img
          src="./assets/portada2.webp"
          ref={imgRef}
          className={`object-cover aspect-square w-80 rounded-full ${isAnimatingImg()}`}
          alt=""
        />
      </div>
    </div>
  );
}
export default AboutMeSection;
