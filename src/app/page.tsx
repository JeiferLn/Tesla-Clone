import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="">
      <Header />

      <section className="h-screen w-screen text-center relative">
        <div className="flex flex-col h-full z-30 relative">
          <header>
            <h2 className="text-white pt-40 text-[40px] font-medium">Disfrute de Tesla</h2>
            <p className="text-white text-sm">Programe una prueba de conducción hoy mismo</p>
          </header>
        
          <footer className="flex flex-col flex-grow justify-end pb-20">
            <div>
              <a href="#" className="text-white border-[3px] border-white bg-white/5 backdrop-blur-sm rounded font-medium px-12 py-2 hover:bg-white hover:text-black transition-colors">Prueba de conducción</a>
            </div>  
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 overflow-hidden">
         <video autoPlay muted loop src="./video.webm" className="w-full h-full object-cover"></video>
        </div>
      </section>
    </main>
  );
}
