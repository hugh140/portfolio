import HeaderCanvas from "./components/HeaderCanvas";

function App() {
  return (
    <>
      <div className="relative">
        <HeaderCanvas />
        <div className="absolute flex md:flex-row flex-col-reverse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full cursor-text backdrop-blur-[2px] p-5 border-2 border-[rgba(255,255,255,0.1)] rounded-lg">
            <h1 className="font-noto text-5xl font-extrabold text-white">
              ¡Hola!
            </h1>
            <h2 className="text-2xl text-zinc-400">
              Soy{" "}
              <span
                className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block 
              text-transparent bg-clip-text font-bold"
              >
                Hugo
              </span>
              , un Desarrollador Web.
            </h2>
          </div>
          <div>Hola</div>
        </div>
      </div>
    </>
  );
}

export default App;
