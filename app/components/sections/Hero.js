import Link from "next/link"

export default function Hero(){
  return (
    <section className="pb-10 xl:pb-24 bg-[var(--bg)] h-screen flex items-end">
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-center gap-8">
        <div className="flex-1">
          <h1 className="text-6xl sm:text-8xl tracking-tight">
            Tu cafetería tiene algo que merece ser visto.
          </h1>
          <p className="mt-4 max-w-xl text-md md:text-lg leading-6">
            Creamos webs que hacen visible lo que te hace especial.
          </p>

          <div className="mt-6 flex-col sm:flex sm:flex-row sm:gap-3">
            <Link href="/#process" className="btn btn-primary mb-2 sm:mb-0 w-9/12 sm:w-auto">Ver cómo lo hacemos</Link>
            <Link href="/#contact" className="btn btn-accent w-9/12 sm:w-auto">Agendar una charla</Link>
          </div>
        </div>

        <div className="flex-1 hidden lg:flex w-full bg-cover bg-no-repeat bg-center rounded-lg shadow" style={{ backgroundImage: "url('assets/img/flatlatte-v.webp')" }} 
        />
       
      </div>
    </section>
  )
}
