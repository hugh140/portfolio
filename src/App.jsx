import Menu from "./components/Menu";
import AboutMeSection from "./sections/AboutMeSection";
import ExperienceInfo from "./sections/ExperienceInfo";
import FooterSection from "./sections/FooterSection";
import HeaderInfo from "./sections/HeaderInfo";
import ProjectSection from "./sections/ProjectSection";

function App() {
  return (
    <main className="text-white bg-black">
      <HeaderInfo />
      <Menu />

      <div className="bg-gradient-to-b from-zinc-950 via-violet-950/50 via-90% to-blue-950/50">
        <ExperienceInfo />
        <ProjectSection />
        <AboutMeSection />
        <div className="py-20" />
        <FooterSection />
      </div>
    </main>
  );
}

export default App;
