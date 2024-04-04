import ExperienceInfo from "./sections/ExperienceInfo";
import HeaderInfo from "./sections/HeaderInfo";
import ProjectSection from "./sections/ProjectSection";

function App() {
  return (
    <main className="bg-zinc-800 text-white">
      <HeaderInfo />
      <ExperienceInfo />
      <ProjectSection />

      <div className="lg:w-[60%] md:w-[75%] p-5 w-full mx-auto">
        <div className="my-20" />
        <h2 className="text-3xl mb-5 font-bold">Sobre Mi</h2>
        <p className="text-lg mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veritatis corporis ullam dolorum cupiditate dicta quibusdam
          consequatur maiores distinctio temporibus culpa nihil quaerat eaque
          repudiandae eos exercitationem voluptate, beatae eum fugit nemo
          reiciendis totam alias ex unde? Vero expedita ipsum ea eaque quidem
          tenetur nisi, harum, temporibus debitis laudantium iusto ducimus odio
          doloremque maxime? Ex laborum accusantium reprehenderit debitis. Aut
          quam ducimus commodi dolorum minus, quae nesciunt nemo nihil, esse
          vitae iure provident est quasi cupiditate laudantium error optio
          quaerat beatae ea magnam. Eius voluptatum hic voluptas corporis labore
          alias. Quasi, quibusdam numquam! Debitis voluptatum mollitia
          consectetur. Dignissimos, eos quia!
        </p>
      </div>

      <div className="my-20" />

      <footer className="text-center p-10 bg-zinc-900">Hola</footer>
    </main>
  );
}

export default App;
