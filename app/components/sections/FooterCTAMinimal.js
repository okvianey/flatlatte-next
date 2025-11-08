import Link from "next/link";

export default function FooterCTAMinimal() {
  return (
    <>
      {/* CTA Simple */}
      <section className="bg-coffee py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Hablamos sobre tu proyecto?
          </h2>
          <p className="text-coffee-light mb-8 text-lg">
            Agenda una llamada sin compromiso y veamos cómo podemos ayudarte
          </p>
          <Link
            href="/contacto"
            className="bg-white text-coffee px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold inline-block hover:scale-105"
          >
            ✨ Comenzar ahora
          </Link>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Flat Latte - Hecho con ☕ y código
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link>
              <Link href="/precios" className="text-gray-400 hover:text-white transition-colors">Precios</Link>
              <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}