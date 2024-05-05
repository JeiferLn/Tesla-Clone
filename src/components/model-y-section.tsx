import Image from "next/image";

export function ModelYSection () {
  return (
    <section className="h-screen w-screen text-center relative">
      <div className="flex flex-col h-full z-30 relative">
        <header>
          <h2 className="text-black pt-40 text-[40px] font-medium">Model Y</h2>
          <p className="text-black text-sm underline">Programe una prueba de conducción hoy mismo</p>
        </header>
      
        <footer className="flex flex-col flex-grow justify-end pb-20">
          <div className="flex justify-center gap-x-6 [&>a]:px-12 [&>a]:py-2">
            <a href="#" className="text-white bg-gray-600 rounded font-medium hover:bg-white hover:text-black hover:border-white transition-colors border-[3px] border-gray-600">Explorar inventario</a>
            <a href="#" className="text-black bg-white rounded font-medium hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-colors border-[3px] border-white">Pedido personalizado</a>
          </div>  
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
        <Image 
          src="/model-y.avif"
          alt="Model Y"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  )
}