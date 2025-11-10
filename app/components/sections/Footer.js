import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link'
import ButtonHighlight from '../ui/ButtonHighlight'

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] mt-16 border-t border-[rgba(82,82,82,0.08)]">
      <div className="mx-auto w-11/12 flex flex-col md:flex-row justify-center items-center md:justify-between md:content-end py-10">

        <Link className='order-3 md:order-1 font-bold relative inline-block group py-1 text-center md:text-start' href="/">
          <h4 className="relative z-30">Flat latte</h4>
          <p className='text-xs relative z-30'>Hecho con café y código</p>
          <span className="absolute bottom-0 left-0 w-0 py-3 bg-yellow-200 opacity-60 transform -rotate-1 transition-all duration-300 group-hover:w-full z-0"></span>
        </Link>

        <div
          className="flex order-1 justify-evenly items-center gap-4 text-xs">


          <ButtonHighlight url="/okvianey"
          >
            Sobre mi
          </ButtonHighlight>

          <ButtonHighlight url="/proyectos"
          >
            Proyectos
          </ButtonHighlight>
          <ButtonHighlight url="/precios"
          >
            Precios
          </ButtonHighlight>
          <ButtonHighlight url="/socios"
          >
            Socios
          </ButtonHighlight>
          <ButtonHighlight url="/#contact"
          >
            Contacto
          </ButtonHighlight>

        </div>

        <div className="flex order-3 justify-center items-center text-2xl">
          <a
            className='relative inline-block group'
            href="https://wa.me/529223400366?text=Hola%21%20Me%20gustar%C3%ADa%20informaci%C3%B3n"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp relative z-10 py-1 px-2" />
            <span className="absolute bottom-0 left-0 w-0 py-4  bg-yellow-200 opacity-60 transform -rotate-1 transition-all duration-300 group-hover:w-full group-hover:px-2 z-0"></span>
          </a>
          <a
            className='relative inline-block group'
            href="https://www.instagram.com/okflatlatte/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram relative z-10 py-1 px-2" />
            <span className="absolute bottom-0 left-0 w-0 py-4  bg-yellow-200 opacity-60 transform -rotate-1 transition-all duration-300 group-hover:w-full group-hover:px-2 z-0"></span>
          </a>
          <a
            className='relative inline-block group'
            href="https://www.youtube.com/@nohomestudio"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube relative z-10 py-1 px-2" />
            <span className="absolute bottom-0 left-0 w-0 py-4  bg-yellow-200 opacity-60 transform -rotate-1 transition-all duration-300 group-hover:w-full group-hover:px-2 z-0"></span>
          </a>
        </div>

        <div className='mx-auto my-5 order-2 md:hidden w-11/12 border-t-1 boder-[var(--accent)'></div>
      </div>



    </footer>
  )
}
