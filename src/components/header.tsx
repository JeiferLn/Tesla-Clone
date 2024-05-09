import { TeslaIcon } from "@/icons/icons";

export function Header() {

  return (
    <header 
      id="landing-header"
      className='w-full py-3 px-10 flex items-center justify-between fixed top-0 z-40'
    >
      <div className="flex flex-grow basis-0 text-current">
        <TeslaIcon />
      </div>
      <nav>
        <ul className="flex text-sm [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:px-4 [&>li>a]:py-2">
          <li><a href="#">Model S</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Powerwall</a></li>
        </ul>
      </nav>
      <nav className="flex flex-grow basis-0 justify-end">
        <ul className="flex [&>li>a]:text-current [&>li>a]:font-medium text-sm [&>li>a]:px-4 [&>li>a]:py-2">
          <li><a href="">Soporte</a></li>
          <li><a href="">Tienda</a></li>
          <li><a href="">Cuenta</a></li>
          <li><a href="">Menú</a></li>
        </ul>
      </nav>
    </header>
  )
}