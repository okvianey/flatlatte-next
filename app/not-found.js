import Link from "next/link";
import ButtonIconL from "./components/ui/ButtonIconL";
import Image from "next/image";
import img404 from "@/public/assets/img/404.png";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-20">
      <section id="page-404" className="section w-full">
        <div className="container max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Imagen */}
            <div className="lg:w-2/5 flex justify-center" data-aos="fade-right">
              <div className="relative">
                <Image
                  className="img-fluid filter grayscale w-64 lg:w-80 hover:grayscale-0 transition-all duration-500"
                  src={ img404 }
                  alt="Página no encontrada - Error 404"
                  width={80}
                  height={80}
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coffee/10 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Contenido */}
            <div className="lg:w-3/5 text-center lg:text-left" data-aos="fade-left">
              <div className="mb-8">
                <span className="text-coffee font-semibold text-lg mb-2 block">Error 404</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  ¡Ups! Página no encontrada
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Parece que el café se enfrió antes de encontrar lo que buscabas.
                </p>
              </div>

              <div className="space-y-4">

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
                  <ButtonIconL
                    url="/"
                    icon="bi-arrow-90deg-left"
                  >
                    {/* <span>☕️</span> */}
                    <span>Volver al inicio</span>
                  </ButtonIconL>

                </div>

              </div>
            </div>
          </div>

          {/* Sección adicional de navegación */}
          <div className="mt-20 text-center" data-aos="fade-up">
            <p className=" mb-6">También puedes visitar:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/proyectos" className="text-gray-700 btn-highlight">Proyectos</Link>
              <span className="text-gray-400">•</span>
              <Link href="/precios" className="text-gray-700 btn-highlight">Precios</Link>
              <span className="text-gray-400">•</span>
              <Link href="/socios" className="text-gray-700 btn-highlight">Ser Socio</Link>
              <span className="text-gray-400">•</span>
              <Link href="/#contact" className="text-gray-700 btn-highlight">Contacto</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}