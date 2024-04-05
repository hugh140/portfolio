import { useState } from "react";
import sections from "../content/projectsContent";

function ProjectSection() {
  const [selected, setSelected] = useState(0);

  function handleSectionSelect(id) {
    setSelected(id);
  }

  return (
    <div className="lg:w-[60%] md:w-[75%] p-5 w-full mx-auto">
      <div className="my-20" />
      <h2 className="text-3xl mb-5 font-bold">Proyectos Personales</h2>

      <div className="flex flex-row items-end justify-around">
        {sections.map((section, index) => (
          <>
            {index === selected ? (
              <button
                className={`bg-gradient-to-b from-zinc-500 to-transparent border-2 border-b-0 rounded-lg rounded-b-none 
              border-white w-full hover:from-zinc-600 p-3 text-xl`}
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

      <div className="border-white border-2 p-5 border-y-0" id="project-border">
        {sections[selected].projects.map((project, index) => (
          <div key={index}>
            {project()}
            {index < sections[selected].projects.length && (
              <div className="my-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectSection;
