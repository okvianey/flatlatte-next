export default function CTASectionClean() {
  return (
    <section id="cta" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Contenido ultra minimalista */}
          <div className="mb-10">
            <h1 
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
            >
              Ofrece sitios web a tus clientes
            </h1>
            <p 
              className="text-lg text-gray-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Únete como socio y enfócate en lo que mejor haces, nosotros nos encargamos del desarrollo.
            </p>
          </div>

          {/* CTA simple y elegante */}
          <div data-aos="fade-up" data-aos-delay="100">
            <a
              href="/contacto-socio-flat-latte"
              className="
                inline-block
                bg-white text-gray-900 
                px-8 py-4 
                rounded-lg
                font-medium
                transition-all duration-200
                hover:bg-gray-100
                hover:shadow-md
              "
            >
              Quiero ser socio
            </a>
          </div>

          {/* Texto secundario sutil */}
          <p 
            className="mt-8 text-sm text-gray-500"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Sin compromisos iniciales • Soporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
}