import { useState, useRef, createContext } from "react";
import sections from "../content/projectsContent";
import useIsVisible from "../hooks/useIsVisible";

const SelectionContext = createContext(null);

function ProjectSection() {
  const [selected, setSelected] = useState(0);
  const addedClass = useRef();
  const ref = useRef();
  const isAnimated = useRef(false);
  const isVisible = useIsVisible(ref);

  function isAnimating() {
    if (isAnimated.current) {
      addedClass.current = "opacity-1";
      return;
    }

    if (isVisible) {
      isAnimated.current = true;
      addedClass.current = "animate-fade-in-up duration-50 opacity-1";
    } else addedClass.current = "opacity-0";
  }
  isAnimating();

  function handleSectionSelect(id) {
    setSelected(id);
  }

  return (
    <div className="lg:w-[60%] md:w-[75%] p-5 w-full mx-auto">
      <div className="my-20" />
      <h2 className="text-3xl mb-5 font-bold">Proyectos Personales</h2>

      <div
        className={`flex flex-row items-end justify-around ${addedClass.current}`}
      >
        {sections.map((section, index) => (
          <>
            {index === selected ? (
              <button
                className={`bg-gradient-to-b from-zinc-500 to-transparent border-2 border-b-0 rounded-lg rounded-b-none 
              border-white w-full hover:from-zinc-600 p-1 py-3 text-xl`}
                onClick={() => handleSectionSelect(index)}
              >
                {section.title}
              </button>
            ) : (
              <button
                className="bg-gradient-to-b from-zinc-700 to-transparent border-2 border-b-0 rounded-lg rounded-b-none 
              border-white w-full hover:from-zinc-800 p-1 text-xl"
                onClick={() => handleSectionSelect(index)}
              >
                {section.title}
              </button>
            )}
          </>
        ))}
      </div>

      <SelectionContext.Provider value={selected}>
        <div
          className={`border-white border-2 p-5 border-y-0 ${addedClass.current}`}
          id="project-border"
          ref={ref}
        >
          {sections[selected].projects.map((project, index) => (
            <div key={project.title}>
              {project()}
              {index < sections[selected].projects.length && (
                <div className="my-10" />
              )}
            </div>
          ))}
        </div>
      </SelectionContext.Provider>
    </div>
  );
}
export { SelectionContext };
export default ProjectSection;
