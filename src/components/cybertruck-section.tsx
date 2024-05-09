import { CybertruckIcon } from "@/icons/icons";
import Image from "next/image";

export function CybertruckSection () {
  return (
    <section 
      className="landing-section h-screen w-screen text-center relative"
      data-header-color="black"
    >
      <div className="flex flex-col h-full z-30 relative">
        <header className="m-auto mt-24 w-2/6">
            <CybertruckIcon />
        </header>
      
        <footer className="flex flex-col flex-grow justify-end pb-20">
          <div className="flex justify-center gap-x-6 [&>a]:px-12 [&>a]:py-2 [&>a]:font-medium [&>a]:w-1/6">
            <a href="#" className="text-black bg-white rounded border-white ">Order Now</a>
            <a href="#" className="text-white bg-black/60 rounded hover:text-white hover:bg-gray-600 hover:border-gray-600 transition-colors border-white">Learn More</a>
          </div>  
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
        <Image 
          src="/Cybertruck.avif"
          alt="Model 3"
          width={2880}
          height={2400}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}