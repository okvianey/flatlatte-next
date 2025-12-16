import Image from "next/image"
import Link from "next/link"
import imgHero from "@/public/assets/img/flatlatte-v.webp"

export default function Hero(){
  return (
    <section className="pb-10 xl:pb-24 bg-[var(--bg)] h-screen flex items-end">
      <div className="container flex flex-col md:flex-row justify-center lg:justify-center gap-4">
        <div className="flex-2 md:flex-1">
          <h1 className="text-6xl sm:text-8xl tracking-tight">
            Tu negocio tiene algo que merece ser visto.
          </h1>
          <p className="mt-4 max-w-xl text-md md:text-lg leading-6">
            Soluciones simples para cafés y emprendedores.
          </p>

          <div className="mt-6 flex-col sm:flex sm:flex-row sm:gap-3">
            <Link href="/#process" className="btn btn-primary mb-2 sm:mb-0 w-9/12 sm:w-auto">Ver lo hacemos</Link>
            <Link href="/#contact" className="btn btn-accent w-9/12 sm:w-auto">Agendar una charla</Link>
          </div>
        </div>

        <div className="flex-1 relative hidden lg:block w-full rounded-lg">
          <Image
            src={imgHero}
            alt="hero flatlatte"
            fill
            className="rounded-lg shadow object-cover"
          />

        </div>
       
      </div>
    </section>
  )
}
