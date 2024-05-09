import Image from "next/image";

export function ModelXSection () {
  return (
    <section 
      className="landing-section h-screen w-screen text-center relative"
      data-header-color="black"
    >
      <div className="flex flex-col h-full z-30 relative">
        <header>
          <h1 className="text-black pt-40 text-[40px] font-medium">Model X</h1>
          <p className="text-black text-[20px] font-medium">From $63,990³</p>
          <p className="text-black/60 text-sm">After Federal Tax Credit & Est. Gas Savings</p>
        </header>
      
        <footer className="flex flex-col flex-grow justify-end pb-20">
          <div className="flex justify-center gap-x-6 [&>a]:px-12 [&>a]:py-2 [&>a]:font-medium [&>a]:w-1/6">
            <a href="#" className="text-black bg-white rounded border-white ">Order Now</a>
            <a href="#" className="text-white bg-black/60 rounded hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-colors border-white">Demo Drive</a>
          </div>  
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
        <Image 
          src="/model-X.avif"
          alt="Model 3"
          width={2880}
          height={2400}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}